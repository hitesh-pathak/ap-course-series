export default function LinkedInPlain({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={34}
      viewBox="0 0 35 34"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h35v34H0z" />
        <path
          fill="#0A66C2"
          fillRule="nonzero"
          d="M3.99 8.956c2.172 0 3.99-1.812 3.99-3.978S6.161 1 3.99 1 0 2.812 0 4.978s1.817 3.978 3.99 3.978M.665 33h6.65V10.9H.664zM25.71 10.282c-2.926 0-5.143 1.06-6.34 2.696V10.9h-6.649V33h6.65V20.934c0-3.138 1.684-4.553 4.122-4.553 2.128 0 3.857 1.282 3.857 4.022V33H34V19.43c0-5.966-3.812-9.148-8.29-9.148"
        />
      </g>
    </svg>
  );
}
