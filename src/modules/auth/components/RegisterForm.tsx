import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiEyeOff, FiLogIn } from "react-icons/fi";
import {
  AuthCard,
  AuthDivider,
  AuthHeader,
  FieldLabel,
  GlassButton,
  GlassInput,
  SubmitArrowIcon,
} from "./AuthGlass";

interface RegisterFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [remember, setRemember] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering user:", { ...formData, remember });
  };

  return (
    <AuthCard className="mx-auto max-w-xl">
      <AuthHeader
        icon={<FiLogIn />}
        title="Create Account"
        description="Shop Faster, Track Orders, Manage Your Wishlist."
      />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <FieldLabel required>Full Name</FieldLabel>
          <GlassInput
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Abhay Chauhan"
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

        <div>
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

        <div>
          <FieldLabel required>Confirm Password</FieldLabel>
          <GlassInput
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Min. 8 Characters"
            rightAdornment={<FiEyeOff />}
            required
          />
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/90 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 rounded border-white/70 bg-transparent accent-white"
            />
            <span>Remember Me For 30 Days</span>
          </label>
          <Link to="/forgot-password" className="underline underline-offset-4">
            Forgot Password?
          </Link>
        </div>

        <GlassButton type="submit">
          <span className="flex items-center gap-2">
            Sign Up <SubmitArrowIcon />
          </span>
        </GlassButton>

        <AuthDivider label="Or" />

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className="flex h-14 items-center justify-center gap-3 rounded-full border border-white/75 bg-white/10 px-5 text-sm text-white transition hover:bg-white/15 sm:text-base"
          >
            <FcGoogle className="text-2xl" />
            Sign In With Google
          </button>
          <button
            type="button"
            className="flex h-14 items-center justify-center gap-3 rounded-full border border-white/75 bg-white/10 px-5 text-sm text-white transition hover:bg-white/15 sm:text-base"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-white">
              <FaFacebookF />
            </span>
            Sign In With Facebook
          </button>
        </div>

        <p className="pt-3 text-center text-sm text-white/85">
          Already Have An Account?{" "}
          <Link to="/login" className="underline underline-offset-4">
            Sign In
          </Link>
        </p>
      </form>
    </AuthCard>
  );
};

export default RegisterForm;
