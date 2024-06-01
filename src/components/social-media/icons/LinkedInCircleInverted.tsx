export default function LinkedInCircleInverted({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="#0A66C2"
        fillRule="evenodd"
        d="M18 0c9.941 0 18 8.059 18 18s-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0m-5.841 12.643H7.85V27h4.308zm11.916-.402c-1.895 0-3.33.689-4.106 1.751v-1.35h-4.307V27h4.307v-7.84c0-2.038 1.091-2.957 2.67-2.957 1.379 0 2.499.833 2.499 2.613V27h4.307v-8.815c0-3.877-2.47-5.944-5.37-5.944m-14.07-6.03c-1.407 0-2.584 1.177-2.584 2.584s1.177 2.584 2.584 2.584 2.584-1.177 2.584-2.584-1.177-2.584-2.584-2.584"
      />
    </svg>
  );
}
