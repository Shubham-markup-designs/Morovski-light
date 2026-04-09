import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface AuthCardProps {
  children: ReactNode;
  className?: string;
}

interface AuthHeaderProps {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

interface FieldLabelProps {
  children: ReactNode;
  required?: boolean;
}

interface GlassInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightAdornment?: ReactNode;
  wrapperClassName?: string;
}

interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const AuthCard = ({ children, className = "" }: AuthCardProps) => (
  <div
    className={`w-full rounded-[2rem] border border-white/80 bg-black/55 p-6 text-white shadow-[0_30px_120px_rgba(0,0,0,0.48)] backdrop-blur-[18px] sm:p-8 ${className}`}
  >
    {children}
  </div>
);

export const AuthHeader = ({ icon, title, description }: AuthHeaderProps) => (
  <div className="mb-8 text-center">
    <div className="mb-4 flex justify-center text-4xl text-white">{icon}</div>
    <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
      {title}
    </h1>
    <div className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
      {description}
    </div>
  </div>
);

export const FieldLabel = ({ children, required = false }: FieldLabelProps) => (
  <label className="mb-2 block text-left text-sm font-medium text-white sm:text-base">
    {children}
    {required ? <span className="text-[#ff7b61]">*</span> : null}
  </label>
);

export const GlassInput = ({
  rightAdornment,
  className = "",
  wrapperClassName = "",
  ...props
}: GlassInputProps) => (
  <div
    className={`flex h-14 items-center rounded-full border border-white/75 bg-white/40 px-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] backdrop-blur-md ${wrapperClassName}`}
  >
    <input
      {...props}
      className={`w-full bg-transparent text-sm text-white placeholder:text-white/65 focus:outline-none sm:text-base ${className}`}
    />
    {rightAdornment ? (
      <span className="ml-3 flex shrink-0 items-center text-white/80">
        {rightAdornment}
      </span>
    ) : null}
  </div>
);

export const GlassButton = ({
  children,
  className = "",
  disabled = false,
  type = "button",
  ...props
}: GlassButtonProps) => (
  <button
    {...props}
    type={type}
    disabled={disabled}
    className={`flex h-14 w-full items-center justify-center rounded-full border border-white/75 bg-[linear-gradient(90deg,rgba(120,84,37,0.55),rgba(194,136,38,0.5),rgba(109,213,237,0.35))] px-6 text-sm font-medium text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base ${className}`}
  >
    {children}
  </button>
);

export const AuthDivider = ({ label = "Or" }: { label?: string }) => (
  <div className="flex items-center gap-4 text-white/90">
    <div className="h-px flex-1 bg-white/35" />
    <span className="text-sm">{label}</span>
    <div className="h-px flex-1 bg-white/35" />
  </div>
);

export const SubmitArrowIcon = () => (
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(255,255,255,0.2)]">
    <FiArrowUpRight className="text-base" />
  </span>
);
