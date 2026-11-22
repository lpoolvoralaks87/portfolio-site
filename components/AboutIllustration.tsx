import Image from "next/image";

type AboutIllustrationProps = {
  className?: string;
};

// Transparent-background PNG in /public, so it sits directly on the beige page.
export default function AboutIllustration({ className = "" }: AboutIllustrationProps) {
  return (
    <Image
      src="/illustration.png"
      alt="Hand-drawn sketch of a girl walking with headphones on"
      width={608}
      height={479}
      preload
      className={`h-auto w-full select-none ${className}`}
    />
  );
}
