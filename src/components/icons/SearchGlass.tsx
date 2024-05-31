export default function SearchGlass({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} {...props}>
      <path
        fillRule="evenodd"
        d="M6.5 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6 4a6 6 0 1 1 10.89 3.476l4.817 4.817a1 1 0 0 1-1.414 1.414l-4.816-4.816A6 6 0 0 1 .5 6"
      />
    </svg>
  );
}
