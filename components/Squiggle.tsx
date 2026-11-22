import Image from "next/image";

type SquiggleProps = {
  className?: string;
};

// Hand-pressed red crayon underline (public/squiggle-red.png).
// `unoptimized` keeps the grainy texture crisp instead of letting Next re-compress it.
export default function Squiggle({ className = "" }: SquiggleProps) {
  return (
    <Image
      src="/squiggle-red.png"
      alt=""
      width={1400}
      height={110}
      unoptimized
      aria-hidden="true"
      className={`h-auto max-w-none select-none ${className}`}
    />
  );
}
