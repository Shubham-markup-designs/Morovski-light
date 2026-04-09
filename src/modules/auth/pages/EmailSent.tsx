import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import {
  AuthCard,
  AuthHeader,
  GlassButton,
  SubmitArrowIcon,
} from "../components/AuthGlass";

export const EmailSent: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["8", "0", "2", "7"]);

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = () => {
    console.log("Verifying OTP:", otp.join(""));
  };

  return (
    <AuthCard className="mx-auto max-w-xl text-center">
      <AuthHeader
        icon={<FiLock />}
        title="Check Your Email"
        description={
          <>
            Input the code that was sent to
            <br />
            abhay*******@gmail.com
          </>
        }
      />

      <div className="mb-6 flex justify-center gap-3 sm:gap-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="h-16 w-16 rounded-2xl border border-white/80 bg-[linear-gradient(90deg,rgba(255,171,63,0.25),rgba(255,255,255,0.2),rgba(110,227,255,0.28))] text-center text-3xl text-white outline-none backdrop-blur-md sm:h-20 sm:w-20"
          />
        ))}
      </div>

      <p className="mb-6 text-sm text-white/85">
        Didn't get any code?{" "}
        <button type="button" className="underline underline-offset-4">
          Resend
        </button>
      </p>

      <GlassButton
        type="button"
        className="mx-auto max-w-md"
        onClick={handleVerify}
      >
        <span className="flex items-center gap-2">
          Confirm & Next <SubmitArrowIcon />
        </span>
      </GlassButton>

      <p className="mt-8 text-sm text-white/85">
        <Link to="/login" className="underline underline-offset-4">
          Back to Login
        </Link>
      </p>
    </AuthCard>
  );
};
