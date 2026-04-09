import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import {
  AuthCard,
  AuthHeader,
  FieldLabel,
  GlassButton,
  GlassInput,
  SubmitArrowIcon,
} from "../components/AuthGlass";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Reset password link sent to:", email);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard className="mx-auto max-w-xl">
      <AuthHeader
        icon={<FiLock />}
        title="Forgot Your Password?"
        description={
          <>
            A Code Will Be Sent To Your Email To Help Reset
            <br />
            Password.
          </>
        }
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <FieldLabel required>Email Address</FieldLabel>
          <GlassInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter your email address"
            required
          />
        </div>

        <GlassButton type="submit" disabled={loading}>
          <span className="flex items-center gap-2">
            {loading ? "Sending..." : "Reset Password"} <SubmitArrowIcon />
          </span>
        </GlassButton>

        <p className="text-center text-sm text-white/85">
          <Link to="/login" className="underline underline-offset-4">
            Back to login
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
