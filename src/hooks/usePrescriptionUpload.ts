import React, { useState, ChangeEvent, FormEvent, DragEvent } from "react";
import { PrescriptionFormData, UploadState } from "../types";

export function usePrescriptionUpload() {
  const [formData, setFormData] = useState<PrescriptionFormData>({
    fullName: "",
    whatsapp: "",
    notes: "",
    file: null,
  });

  const [uploadState, setUploadState] = useState<UploadState>({
    loading: false,
    success: false,
    error: null,
  });

  const [uploadProgress, setUploadProgress] = useState<number>(0);

  // Auto-format phone input while typing as Brazilian WhatsApp mask (XX) XXXXX-XXXX
  const formatWhatsApp = (value: string) => {
    const cleanNumbers = value.replace(/\D/g, "");
    
    if (cleanNumbers.length === 0) return "";
    if (cleanNumbers.length <= 2) return `(${cleanNumbers}`;
    if (cleanNumbers.length <= 7) return `(${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2)}`;
    return `(${cleanNumbers.slice(0, 2)}) ${cleanNumbers.slice(2, 7)}-${cleanNumbers.slice(7, 11)}`;
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      setFormData((prev) => ({
        ...prev,
        [name]: formatWhatsApp(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setFormData((prev) => ({ ...prev, file: null }));
      return;
    }

    const limitBytes = 10 * 1024 * 1024;
    if (file.size > limitBytes) {
      setUploadState({
        loading: false,
        success: false,
        error: "O tamanho do arquivo excede o limite permitido de 10MB.",
      });
      return;
    }

    setFormData((prev) => ({ ...prev, file }));
    setUploadState({
      loading: false,
      success: false,
      error: null,
    });
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      whatsapp: "",
      notes: "",
      file: null,
    });
    setUploadState({
      loading: false,
      success: false,
      error: null,
    });
    setUploadProgress(0);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setUploadState({
        loading: false,
        success: false,
        error: "Por favor, insira seu nome completo.",
      });
      return;
    }

    const phoneDigits = formData.whatsapp.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setUploadState({
        loading: false,
        success: false,
        error: "Por favor, digite um número de WhatsApp completo com ddd.",
      });
      return;
    }

    if (!formData.file) {
      setUploadState({
        loading: false,
        success: false,
        error: "Por favor, anexe ou arraste uma receita digital (imagem ou PDF).",
      });
      return;
    }

    setUploadState({
      loading: true,
      success: false,
      error: null,
    });
    setUploadProgress(10);

    try {
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + 20;
        });
      }, 300);

      await new Promise((resolve) => setTimeout(resolve, 1800));
      clearInterval(interval);
      setUploadProgress(100);

      setUploadState({
        loading: false,
        success: true,
        error: null,
        estimatedTime: "15 a 30 minutos",
        uploadedUrl: "recipe_secure_uuid_stored.pdf",
      });
    } catch {
      setUploadState({
        loading: false,
        success: false,
        error: "Erro na conexão. Verifique sua rede e tente enviar novamente.",
      });
    }
  };

  return {
    formData,
    uploadProgress,
    uploadState,
    handleInputChange,
    handleFileChange,
    handleDrop,
    handleSubmit,
    resetForm,
  };
}
