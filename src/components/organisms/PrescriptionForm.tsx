import React, { useRef, useState, DragEvent } from "react";
import { usePrescriptionUpload } from "../../hooks/usePrescriptionUpload";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";
import { Upload, FileCheck, CheckCircle2, Trash2, ShieldCheck, HelpCircle, PhoneCall } from "lucide-react";

export default function PrescriptionForm() {
  const {
    formData,
    uploadProgress,
    uploadState,
    handleInputChange,
    handleFileChange,
    handleDrop,
    handleSubmit,
    resetForm,
  } = usePrescriptionUpload();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDropFile = (e: DragEvent<HTMLDivElement>) => {
    handleDrop(e);
    setIsDragging(false);
  };

  return (
    <section id="upload" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/30 flex flex-col lg:flex-row min-h-[600px] ambient-shadow">
          
          {/* Information sidebar - Clinical Trust branding */}
          <div className="lg:w-2/5 p-8 lg:p-12 bg-secondary text-white space-y-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest bg-white/10 text-primary-container rounded-full border border-white/10">
                Orçamento Sem Compromisso
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">
                Peça seu orçamento online
              </h2>
              <p className="text-white/80 text-lg leading-relaxed font-light">
                Preencha seus dados básicos e anexe a receita médica ou a foto dela. Nossa equipe farmacêutica especialista iniciará a cotação imediatamente.
              </p>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-primary-container shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold">Análise Técnica Técnica</p>
                  <p className="text-white/70">Farmacêuticos revisam dosagens e interações.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-primary-container shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold">Agilidade pelo WhatsApp</p>
                  <p className="text-white/70">Receba sua cotação e tire dúvidas rapidamente.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-primary-container shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold">Privacidade Total</p>
                  <p className="text-white/70">Seus dados e receitas guardados com sigilo médico.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 relative z-10 flex items-center gap-4 text-xs text-white/60">
              <ShieldCheck className="w-5 h-5 text-[#43d8f2]" />
              <span>Certificação de Qualidade Dr.Phormula • 100% Seguro</span>
            </div>
          </div>

          {/* Form Content Side */}
          <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
            {uploadState.success ? (
              /* High Fidelity Success Message State */
              <div className="text-center space-y-6 max-w-md mx-auto py-8">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto text-emerald-500 scale-105 border border-emerald-100 float-anim">
                  <FileCheck className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-on-surface">
                    Receita enviada com sucesso!
                  </h3>
                  <p className="text-on-surface-variant font-light">
                    Olá, <strong>{formData.fullName}</strong>. Iniciamos a conferência técnica da sua receita.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-low border border-primary-container/20 text-left space-y-3">
                  <div className="flex items-center gap-2 font-medium text-on-secondary-container">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Próximos Passos:</span>
                  </div>
                  <ul className="text-sm text-on-surface-variant/90 space-y-2 pl-4 list-disc font-light">
                    <li>Análise de compatibilidade e posologia farmacêutica.</li>
                    <li>Cotação dos melhores insumos certificados.</li>
                    <li>
                      Envio do orçamento diretamente para <strong>{formData.whatsapp}</strong> em até{" "}
                      <strong>{uploadState.estimatedTime}</strong>.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={resetForm}
                  >
                    Enviar Outra Receita
                  </Button>
                  <a
                    href={`https://wa.me/557930000000?text=Olá, enviei minha receita pelo site de nome ${encodeURIComponent(
                      formData.fullName
                    )} e gostaria de agilizar o orçamento.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="secondary" className="w-full" leftIcon={<PhoneCall className="w-4 h-4" />}>
                      Falar Conosco
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              /* Core Form State */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-on-surface">
                    Cadastre seus dados e receita
                  </h3>
                  <p className="text-on-surface-variant text-sm font-light">
                    Todos os orçamentos são finalizados por especialistas competentes.
                  </p>
                </div>

                {uploadState.error && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-200">
                    {uploadState.error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Nome Completo"
                    name="fullName"
                    placeholder="Ex: Ana Maria Silva"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    disabled={uploadState.loading}
                    required
                  />
                  <Input
                    label="Celular / WhatsApp"
                    name="whatsapp"
                    placeholder="Ex: (79) 99999-9999"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    disabled={uploadState.loading}
                    required
                    type="tel"
                  />
                </div>

                {/* File handling region */}
                <div className="space-y-2">
                  <label className="font-semibold text-sm text-on-surface/80 tracking-wide block">
                    Sua Receita Médica (PDF, Imagem ou Foto tirada)
                  </label>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        handleFileChange(e.target.files[0]);
                      }
                    }}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="hidden"
                    id="hidden-file-input"
                  />

                  {formData.file ? (
                    /* Display Selected File Details */
                    <div className="border border-outline-variant rounded-xl p-4 bg-surface-container-low flex items-center justify-between transition-colors animate-fade-in">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="w-10 h-10 bg-primary-container/10 rounded-lg flex items-center justify-center text-primary-container shrink-0">
                          <FileCheck className="w-5 h-5" />
                        </div>
                        <div className="text-left overflow-hidden">
                          <p className="text-sm font-bold text-on-surface truncate">
                            {formData.file.name}
                          </p>
                          <p className="text-xs text-on-surface-variant/80">
                            {(formData.file.size / (1024 * 1024)).toFixed(2)} MB • Pronto para envio
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleFileChange(null)}
                        className="p-2 text-on-surface-variant hover:text-red-500 rounded-lg hover:bg-white transition-colors"
                        title="Substituir arquivo"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ) : (
                    /* Interactive Drag and Drop Container */
                    <div
                      onDragOver={onDragOver}
                      onDragLeave={onDragLeave}
                      onDrop={onDropFile}
                      onClick={triggerFileSelect}
                      className={`border-2 border-dashed rounded-xl p-8 lg:p-12 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 outline-none ${
                        isDragging
                          ? "border-primary bg-primary-container/5 scale-[1.01]"
                          : "border-outline-variant hover:border-primary-container hover:bg-surface-container-low"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container mb-4">
                        <Upload className="w-6 h-6" />
                      </div>
                      <p className="font-bold text-on-surface text-base">
                        Arraste sua receita aqui ou clique para selecionar
                      </p>
                      <p className="text-xs text-on-surface-variant/80 mt-2">
                        Formatos suportados: JPEG, PNG ou PDF até 10MB
                      </p>
                    </div>
                  )}
                </div>

                {/* Additional notes/comments */}
                <Textarea
                  label="Observações adicionais (Opcional)"
                  name="notes"
                  rows={3}
                  placeholder="Ex: Gostaria de cápsulas veganas, preferência por entrega amanhã ou alguma receita associada."
                  value={formData.notes}
                  onChange={handleInputChange}
                  disabled={uploadState.loading}
                />

                {/* Simulated file upload loading indicator */}
                {uploadState.loading && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-primary">
                      <span>Criptografando e enviando receita de forma segura...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-primary-container h-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Submission core action */}
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  className="py-4"
                  isLoading={uploadState.loading}
                >
                  Enviar para Cotação Rápida
                </Button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-on-surface-variant/80">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Dúvidas no envio? Ligue para fone (79) 3000-0000</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
