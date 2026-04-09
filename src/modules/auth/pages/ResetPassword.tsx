import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEyeOff, FiLock } from "react-icons/fi";
import {
  AuthCard,
  AuthHeader,
  FieldLabel,
  GlassButton,
  GlassInput,
  SubmitArrowIcon,
} from "../components/AuthGlass";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!newPassword || !confirmPassword) {
      setError("Both fields are required");
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setSuccess("Password reset successfully!");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <AuthCard className="mx-auto max-w-xl">
      <AuthHeader
        icon={<FiLock />}
        title="Set A New Password?"
        description={
          <>
            Your New Password Must Be Different From Previously
            <br />
            Used Passwords.
          </>
        }
      />

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <FieldLabel required>Password</FieldLabel>
          <GlassInput
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="enter your new password"
            rightAdornment={<FiEyeOff />}
          />
        </div>

        <div>
          <FieldLabel required>Confirm Password</FieldLabel>
          <GlassInput
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="enter your new password"
            rightAdornment={<FiEyeOff />}
          />
        </div>

        {error ? (
          <div className="rounded-2xl border border-[#ff7b61]/40 bg-[#ff7b61]/15 px-4 py-3 text-sm text-white">
            {error}
          </div>
        ) : null}
        {success ? (
          <div className="rounded-2xl border border-emerald-300/40 bg-emerald-400/15 px-4 py-3 text-sm text-white">
            {success}
          </div>
        ) : null}

        <GlassButton type="submit">
          <span className="flex items-center gap-2">
            Reset Password <SubmitArrowIcon />
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
