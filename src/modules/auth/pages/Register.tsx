import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { B2BRegisterForm } from "../components/B2BRegisterForm";

const Register = () => {
  const [type, setType] = useState<"b2c" | "b2b">("b2c");

  return (
    <div className="space-y-6">
      <div className="mx-auto flex max-w-md rounded-full border border-white/60 bg-black/35 p-1 backdrop-blur-md">
        <button
          type="button"
          onClick={() => setType("b2c")}
          className={`flex-1 rounded-full px-5 py-3 text-sm font-medium transition sm:text-base ${
            type === "b2c"
              ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.18)]"
              : "text-white/85"
          }`}
        >
          Personal
        </button>
        <button
          type="button"
          onClick={() => setType("b2b")}
          className={`flex-1 rounded-full px-5 py-3 text-sm font-medium transition sm:text-base ${
            type === "b2b"
              ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.18)]"
              : "text-white/85"
          }`}
        >
          Business
        </button>
      </div>

      {type === "b2c" ? <RegisterForm /> : <B2BRegisterForm />}
    </div>
  );
};

export default Register;
