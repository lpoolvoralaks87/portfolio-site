type SquiggleProps = {
  className?: string;
};

export default function Squiggle({ className }: SquiggleProps) {
  return (
    <svg
      viewBox="0 0 240 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 14c9-9 17-11 25-4 9 8 16 9 24 1 9-9 18-10 26-2
           9 9 17 10 25 2 8-8 17-10 25-3 9 8 17 9 25 1
           9-8 18-9 26-2 8 7 16 8 24 1 8-7 17-9 25-3
           7 5 14 7 18 3"
        stroke="#C1362B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
