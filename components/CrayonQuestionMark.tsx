import Image from "next/image";

type CrayonQuestionMarkProps = {
  className?: string;
};

// Hand-pressed red crayon "?" (public/question-red.png).
export default function CrayonQuestionMark({ className = "" }: CrayonQuestionMarkProps) {
  return (
    <Image
      src="/question-red.png"
      alt=""
      width={240}
      height={400}
      unoptimized
      aria-hidden="true"
      className={`select-none ${className}`}
    />
  );
}
