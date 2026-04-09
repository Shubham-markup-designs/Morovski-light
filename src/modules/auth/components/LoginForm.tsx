import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, remember }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard className="mx-auto max-w-xl">
      <AuthHeader
        icon={<FiLogIn />}
        title="Welcome Back!"
        description="Sign In To Your Morvoski Account"
      />

      <form className="space-y-5" onSubmit={handleSubmit}>
        {error ? (
          <div className="rounded-2xl border border-[#ff7b61]/40 bg-[#ff7b61]/15 px-4 py-3 text-sm text-white">
            {error}
          </div>
        ) : null}

        <div>
          <FieldLabel required>Email Address</FieldLabel>
          <GlassInput
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <FieldLabel required>Password</FieldLabel>
          <GlassInput
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            rightAdornment={<FiEyeOff />}
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

        <GlassButton type="submit" disabled={loading}>
          <span className="flex items-center gap-2">
            {loading ? "Signing In..." : "Sign In"} <SubmitArrowIcon />
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
          Don't Have An Account?{" "}
          <Link to="/register" className="underline underline-offset-4">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthCard>
  );
};

export default LoginForm;
