/**
 * Dr.Phormula - Type Definitions
 */

export interface FeatureCardType {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceType {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface ProcessStepType {
  id: number;
  title: string;
  description: string;
}

export interface PrescriptionFormData {
  fullName: string;
  whatsapp: string;
  notes: string;
  file: File | null;
}

export interface UploadState {
  loading: boolean;
  success: boolean;
  error: string | null;
  uploadedUrl?: string;
  estimatedTime?: string;
}
