export default function Hamburger({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={16} {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.826}
        d="M1 1.609h20M1 8h20M1 14.391h20"
      />
    </svg>
  );
}
