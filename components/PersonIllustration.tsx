type PersonIllustrationProps = {
  className?: string;
};

export default function PersonIllustration({ className }: PersonIllustrationProps) {
  return (
    <svg
      viewBox="0 0 300 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* head */}
      <path
        d="M126 58c-4-26 16-46 42-46s46 20 43 46c3 4 4 10 2 16-3 22-22 40-45 40s-42-18-45-40c-2-6-1-12 3-16Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* ear + jaw detail */}
      <path
        d="M168 74c4-2 8 0 8 6s-4 10-9 9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* neck + shoulders + torso, one continuous line */}
      <path
        d="M148 112c2 10 0 18-8 24-30 20-56 34-66 66-8 26-10 62-8 104
           2 34 6 66 12 96 3 16 5 30 4 46
           28 4 60 6 92 6 34 0 66-2 94-7
           -2-18 0-32 4-48 7-30 11-62 13-96
           2-42 0-78-8-104-10-32-36-46-66-66-8-6-10-14-8-24"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* left arm resting along body */}
      <path
        d="M84 202c-14 22-22 46-24 72-2 24 0 46 6 66"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* right arm, hand near waist */}
      <path
        d="M212 202c14 20 22 42 22 66 0 16-4 30-12 40"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* waistline */}
      <path
        d="M108 330c14 6 30 9 42 9s28-3 42-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* legs */}
      <path
        d="M118 440c-4 26-8 48-14 68M182 440c4 26 8 48 14 68"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
