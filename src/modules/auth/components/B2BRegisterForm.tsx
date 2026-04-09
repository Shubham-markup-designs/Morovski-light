import React, { useState } from "react";
import { FiEyeOff, FiLogIn } from "react-icons/fi";
import {
  AuthCard,
  AuthHeader,
  FieldLabel,
  GlassButton,
  GlassInput,
  SubmitArrowIcon,
} from "./AuthGlass";

interface FormData {
  contactPerson: string;
  designation: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  gstNumber: string;
  billingAddress: string;
  city: string;
  state: string;
  pinCode: string;
  country: string;
  password: string;
}

export const B2BRegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    contactPerson: "",
    designation: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    gstNumber: "",
    billingAddress: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    password: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, acceptedTerms });
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <AuthCard>
        <AuthHeader
          icon={<FiLogIn />}
          title="Apply For A Business Account"
          description="Complete This Form. Our Team Will Review And Activate Your Account With A Personalised Discount Within 1 Business Day."
        />

        <form onSubmit={handleSubmit} className="space-y-10">
          <fieldset className="space-y-5">
            <legend className="mb-1 text-2xl font-semibold text-white">
              Contact Information
            </legend>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <FieldLabel required>Contact Person</FieldLabel>
                <GlassInput
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  placeholder="Abhay Chauhan"
                  required
                />
              </div>
              <div>
                <FieldLabel required>Designation</FieldLabel>
                <GlassInput
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Purchase Manager"
                  required
                />
              </div>
              <div>
                <FieldLabel required>Email Address</FieldLabel>
                <GlassInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Abhay@gmail.com"
                  required
                />
              </div>
              <div>
                <FieldLabel required>Phone Number</FieldLabel>
                <GlassInput
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 9876 123 4567"
                  required
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="space-y-5">
            <legend className="mb-1 text-2xl font-semibold text-white">
              Business Details
            </legend>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <FieldLabel required>Company Name</FieldLabel>
                <GlassInput
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="ABC Electrical Solutions Pvt. Ltd."
                  required
                />
              </div>
              <div>
                <FieldLabel required>GST Number</FieldLabel>
                <GlassInput
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleChange}
                  placeholder="07***********0000X1ZS"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <FieldLabel required>Billing Address</FieldLabel>
                <GlassInput
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleChange}
                  placeholder="Unit B, DLF Cyber City"
                  required
                />
              </div>
              <div>
                <FieldLabel required>City</FieldLabel>
                <GlassInput
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Gurugram"
                  required
                />
              </div>
              <div>
                <FieldLabel required>State</FieldLabel>
                <GlassInput
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Haryana"
                  required
                />
              </div>
              <div>
                <FieldLabel required>PIN Code</FieldLabel>
                <GlassInput
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="121002"
                  required
                />
              </div>
              <div>
                <FieldLabel required>Country</FieldLabel>
                <GlassInput
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="India"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <FieldLabel required>Password</FieldLabel>
                <GlassInput
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min. 8 Characters"
                  rightAdornment={<FiEyeOff />}
                  required
                />
              </div>
            </div>
          </fieldset>

          <label className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-white/70 bg-transparent accent-white"
            />
            <span>
              I Agree To The <span className="underline underline-offset-4">B2B Terms</span>,{" "}
              <span className="underline underline-offset-4">Terms & Conditions</span> And{" "}
              <span className="underline underline-offset-4">Privacy Policy</span>
            </span>
          </label>

          <GlassButton type="submit">
            <span className="flex items-center gap-2">
              Submit Application <SubmitArrowIcon />
            </span>
          </GlassButton>
        </form>
      </AuthCard>

      <AuthCard className="mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-semibold text-white">Note</h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
          Business registrations are reviewed manually. Please make sure your
          contact and GST details match your official business records so the
          approval process stays fast and accurate.
        </p>
      </AuthCard>
    </div>
  );
};
