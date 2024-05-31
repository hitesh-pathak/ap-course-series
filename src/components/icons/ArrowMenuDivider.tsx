export default function ArrowMenuDivider({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={7} height={11} {...props}>
      <path
        fillRule="evenodd"
        d="M.793 10.207a1 1 0 0 1 0-1.414L4.086 5.5.793 2.207A1 1 0 0 1 2.207.793l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0"
      />
    </svg>
  );
}
