# Landing Page - Dr Phormula

## Tecnologias Utilizadas
- React
- TypeScript
- Tailwind CSS
- Express
- Nodemailer

## Rodar projeto localmente

**Prerequisites:** Node.js

1. Instalar dependências:
   `npm install`
2. Criar o arquivo de ambiente:
   `cp .env.example .env`
3. Configurar no `.env` o e-mail que receberá as receitas e os dados SMTP.
4. Executar o app:
   `npm run dev`

## Envio de receitas por e-mail

O formulário de receita envia os dados para o endpoint interno:

`POST /api/prescriptions`

O backend recebe nome, WhatsApp, observações e o arquivo da receita em PDF/JPG/PNG, e envia tudo por e-mail usando SMTP.

Configure estas variáveis no `.env`:

```env
PRESCRIPTION_RECIPIENT_EMAIL="orcamentos@seudominio.com.br"
SMTP_HOST="smtp.seudominio.com.br"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="usuario@seudominio.com.br"
SMTP_PASS="SMTP_PASSWORD_HERE"
SMTP_FROM="Dr.Phormula <usuario@seudominio.com.br>"
SMTP_REPLY_TO="usuario@seudominio.com.br"
```

Observações importantes:

- O arquivo `.env` não deve ser versionado.
- Para Gmail, Outlook ou provedores semelhantes, normalmente é necessário usar senha de aplicativo ou credenciais SMTP específicas.
- Em produção, o projeto precisa rodar em um ambiente Node.js, pois hospedagem apenas estática não executa o endpoint `/api/prescriptions`.
- Após alterar dependências, rode `npm install` para atualizar o `package-lock.json` localmente.

## SEO e compartilhamento social

- Os padrões de SEO ficam centralizados em `src/config/seo.config.ts`.
- O `index.html` mantém as tags essenciais estáticas para WhatsApp, Instagram e outros crawlers que não executam JavaScript.
- Antes da publicação, preencha no arquivo de configuração o token real do Google Search Console e os perfis sociais oficiais.
- Adicione telefone, redes sociais e coordenadas ao JSON-LD somente após validar os dados oficiais da empresa.
- `robots.txt`, `sitemap.xml`, manifest, ícones e a imagem Open Graph estão na pasta `public`.

## Desenvolvido por Paulo Roberto Dias
## Fluxo sistemas e tecnologia
## (79) 9 8129-1760

## [www.fluxosistemas.com.br](http://www.fluxosistemas.com.br)

© Todos os direitos reservados. 2026
