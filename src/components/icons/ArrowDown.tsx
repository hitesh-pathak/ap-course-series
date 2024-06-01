export default function ArrowDown({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={11}
      height={7}
      className="fill-current"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M.793.793a1 1 0 0 1 1.414 0L5.5 4.086 8.793.793a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414"
      />
    </svg>
  );
}
