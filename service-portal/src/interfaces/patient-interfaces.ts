export interface Patient {
  id: string;
  fullName: string;
  gender: string;
  dayOfBirth: string;
  address: string;
  phoneNumber: string;
}

export interface CreatePatientPayload {
  fullName: string;
  gender: string;
  dayOfBirth: string;
  phoneNumber: string;
  address?: string;
}