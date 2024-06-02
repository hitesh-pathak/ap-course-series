export default function DownloadAppCircle({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="fill-current"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="none"
        stroke="#FFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m-2.5-3.258h5M10 8.129l-2 2.065m0 0L6 8.129m2 2.065V4"
      />
    </svg>
  );
}
