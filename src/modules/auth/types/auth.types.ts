export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface B2BRegisterPayload extends RegisterPayload {
  companyName: string;
  gstNumber: string;
  phone: string;
  address: string;
}