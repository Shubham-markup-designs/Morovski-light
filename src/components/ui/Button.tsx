import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { HiArrowUpRight } from "react-icons/hi2";

type SharedProps = {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  variant?: "glass" | "dark";
};

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type NativeLinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | NativeLinkProps;

const variantClassNames = {
  glass:
    "border border-white/70 bg-white/10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md hover:bg-white/20",
  dark:
    "border border-[#1d1b24] bg-[#1d1b24] text-white shadow-[0_12px_30px_rgba(17,15,20,0.16)] hover:bg-[#2a2733]",
};

const Button = ({
  children,
  className = "",
  icon,
  variant = "glass",
  ...props
}: ButtonProps) => {
  const content = (
    <>
      <span>{children}</span>
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full shadow-sm ${
          variant === "dark"
            ? "border border-white/20 bg-white text-[#1d1b24]"
            : "border border-white/60 bg-white text-[#3a2a1b]"
        }`}
      >
        {icon ?? <HiArrowUpRight className="text-base" />}
      </span>
    </>
  );

  if ("href" in props) {
    return (
      <a
        className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${variantClassNames[variant]} ${className}`.trim()}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${variantClassNames[variant]} ${className}`.trim()}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
