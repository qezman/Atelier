export interface EnquiryPayload {
  name: string;
  email: string;
  projectType?: string | null;
  message: string;
}

export interface EnquiryResponse {
  message?: string;
  error?: string;
}
