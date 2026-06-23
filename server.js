import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 3000);
const isProduction = process.env.NODE_ENV === "production";
const MAX_FILE_SIZE_MB = Number(process.env.PRESCRIPTION_MAX_FILE_SIZE_MB || 10);
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const JSON_LIMIT = process.env.PRESCRIPTION_JSON_LIMIT || "25mb";

app.use(express.json({ limit: JSON_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: JSON_LIMIT }));

const allowedMimeTypes = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
]);

function getMissingEmailConfig() {
  return ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "PRESCRIPTION_RECIPIENT_EMAIL"].filter(
    (key) => !process.env[key]
  );
}

function inferMimeType(fileName = "") {
  const extension = path.extname(fileName).toLowerCase();

  if (extension === ".pdf") return "application/pdf";
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".png") return "image/png";

  return "application/octet-stream";
}

function sanitizeFileName(fileName = "receita") {
  return String(fileName)
    .replace(/[^a-zA-Z0-9._() -]/g, "_")
    .slice(0, 120) || "receita";
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createTransporter() {
  const smtpPort = Number(process.env.SMTP_PORT || 587);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

app.post("/api/prescriptions", async (req, res) => {
  const missingConfig = getMissingEmailConfig();

  if (missingConfig.length > 0) {
    return res.status(500).json({
      success: false,
      message: `Configuração de e-mail incompleta: ${missingConfig.join(", ")}.`,
    });
  }

  const { fullName, whatsapp, notes, fileName, fileType, fileContent } = req.body || {};

  if (!fullName || !String(fullName).trim()) {
    return res.status(400).json({ success: false, message: "Nome completo é obrigatório." });
  }

  if (!whatsapp || String(whatsapp).replace(/\D/g, "").length < 10) {
    return res.status(400).json({ success: false, message: "WhatsApp completo com DDD é obrigatório." });
  }

  if (!fileContent || !fileName) {
    return res.status(400).json({ success: false, message: "Receita médica em PDF ou imagem é obrigatória." });
  }

  const normalizedFileType = fileType || inferMimeType(fileName);

  if (!allowedMimeTypes.has(normalizedFileType)) {
    return res.status(400).json({
      success: false,
      message: "Formato inválido. Envie PDF, JPG, JPEG ou PNG.",
    });
  }

  const base64Content = String(fileContent).includes(",")
    ? String(fileContent).split(",").pop()
    : String(fileContent);

  const fileBuffer = Buffer.from(base64Content, "base64");

  if (!fileBuffer.length) {
    return res.status(400).json({ success: false, message: "Arquivo da receita está vazio ou inválido." });
  }

  if (fileBuffer.length > MAX_FILE_SIZE_BYTES) {
    return res.status(400).json({
      success: false,
      message: `O arquivo excede o limite permitido de ${MAX_FILE_SIZE_MB}MB.`,
    });
  }

  const safeFileName = sanitizeFileName(fileName);
  const cleanFullName = String(fullName).trim();
  const cleanWhatsApp = String(whatsapp).trim();
  const cleanNotes = notes ? String(notes).trim() : "";

  const htmlNotes = cleanNotes
    ? escapeHtml(cleanNotes).replace(/\n/g, "<br />")
    : "Sem observações.";

  try {
    const transporter = createTransporter();
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.PRESCRIPTION_RECIPIENT_EMAIL,
      replyTo: process.env.SMTP_REPLY_TO || process.env.SMTP_USER,
      subject: `Nova receita pelo site - ${cleanFullName}`,
      text: [
        "Nova receita enviada pelo site Dr.Phormula.",
        "",
        `Nome: ${cleanFullName}`,
        `WhatsApp: ${cleanWhatsApp}`,
        `Observações: ${cleanNotes || "Sem observações."}`,
      ].join("\n"),
      html: `
        <h2>Nova receita enviada pelo site Dr.Phormula</h2>
        <p><strong>Nome:</strong> ${escapeHtml(cleanFullName)}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(cleanWhatsApp)}</p>
        <p><strong>Observações:</strong><br />${htmlNotes}</p>
        <p>A receita está anexada neste e-mail.</p>
      `,
      attachments: [
        {
          filename: safeFileName,
          content: fileBuffer,
          contentType: normalizedFileType,
        },
      ],
    });

    return res.status(200).json({
      success: true,
      message: "Receita enviada por e-mail com sucesso.",
      estimatedTime: "15 a 30 minutos",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Erro ao enviar receita por e-mail:", error);

    return res.status(500).json({
      success: false,
      message: "Não foi possível enviar a receita por e-mail agora. Tente novamente ou fale pelo WhatsApp.",
    });
  }
});

if (isProduction) {
  const distPath = path.resolve(__dirname, "dist");

  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    const indexPath = path.join(distPath, "index.html");

    if (fs.existsSync(indexPath)) {
      return res.sendFile(indexPath);
    }

    return res.status(404).send("Aplicação não compilada. Execute npm run build antes de iniciar em produção.");
  });
} else {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });

  app.use(vite.middlewares);
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Dr.Phormula rodando em http://0.0.0.0:${PORT}`);
});
