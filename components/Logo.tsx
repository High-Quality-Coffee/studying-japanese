import Image from "next/image";

type LogoProps = {
  size?: number;
  variant?: "on-light" | "on-dark";
  className?: string;
  priority?: boolean;
};

export function Logo({
  size = 48,
  variant = "on-light",
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/語_logo.svg"
      alt="語 일본어 학습 로고"
      width={size}
      height={size}
      priority={priority}
      className={`select-none ${variant === "on-light" ? "[filter:invert(1)]" : ""} ${className}`}
    />
  );
}
