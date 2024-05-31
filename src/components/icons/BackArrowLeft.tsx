export default function BackArrowLeft({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        d="M7.244 12.249a.89.89 0 0 1-1.238 0L.756 7.106a.845.845 0 0 1 0-1.212L6.006.75a.89.89 0 0 1 1.238 0 .845.845 0 0 1 0 1.212l-3.757 3.68h10.138c.483 0 .875.384.875.857a.866.866 0 0 1-.875.857H3.487l3.757 3.68a.845.845 0 0 1 0 1.212"
      />
    </svg>
  );
}
