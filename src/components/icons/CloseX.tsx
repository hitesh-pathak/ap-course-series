export default function CloseX({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={13}
      viewBox="0 0 13 13"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M.793.793a1 1 0 0 1 1.414 0L6.5 5.086 10.793.793a1 1 0 1 1 1.414 1.414L7.914 6.5l4.293 4.293a1 1 0 0 1-1.414 1.414L6.5 7.914l-4.293 4.293a1 1 0 0 1-1.414-1.414L5.086 6.5.793 2.207a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
}
