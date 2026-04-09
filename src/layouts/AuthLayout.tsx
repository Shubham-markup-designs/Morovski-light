import type { ReactNode } from "react";
import lampBackground from "../assets/3d-modern-lighting-lamp-design-1.png";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#04070b] text-white">
      <div
        className="absolute inset-0 scale-[1.04] bg-cover bg-center bg-no-repeat blur-[3px]"
        style={{ backgroundImage: `url(${lampBackground})` }}
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl lg:pl-24">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
