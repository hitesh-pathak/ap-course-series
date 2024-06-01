export default function FBPlain({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      viewBox="0 0 19 34"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h19v34H0z" />
        <path
          fill="#3E6FA7"
          stroke="#3E6FA7"
          strokeWidth={1.393}
          d="M12.074 33H6.23l-.133-14.297H1V13.13h5.102l-.005-4.52C6.096 4.02 9.3 1 14.16 1l3.84.23v5.296h-3.394c-1.892 0-2.532 1.342-2.532 2.81v3.795h5.666l-.765 5.572h-4.9z"
        />
      </g>
    </svg>
  );
}
