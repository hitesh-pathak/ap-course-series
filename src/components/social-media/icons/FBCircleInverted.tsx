export default function FBCircleInverted({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
      <path
        fill="#3E6FA7"
        fillRule="evenodd"
        d="M18 0c9.941 0 18 8.093 18 18.075C36 27.263 29.174 34.85 20.337 36V23.46h4.447l.695-4.946h-5.143v-3.368c0-1.303.58-2.495 2.298-2.495h3.08V7.95l-3.484-.203c-4.41 0-7.32 2.681-7.319 6.754l.005 4.013h-4.63v4.946h4.625l.12 12.446C6.501 34.484 0 27.042 0 18.076 0 8.092 8.059 0 18 0"
      />
    </svg>
  );
}
