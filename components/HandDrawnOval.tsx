type HandDrawnOvalProps = {
  className?: string;
};

export default function HandDrawnOval({ className }: HandDrawnOvalProps) {
  return (
    <svg
      viewBox="0 0 120 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M60 3c24 0 45 3 52 9 6 5 6 11-1 16-13 10-38 14-58 13
           C30 40 9 35 4 25c-4-8 2-15 15-19C29 3 44 2 60 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
