export function ContactMailIco({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={16}
      className="fill-current"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#CBD5E1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="m1 4 7.89 5.26a2 2 0 0 0 2.22 0L19 4" />
        <path d="M3 15h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2" />
      </g>
    </svg>
  );
}

export function ContactWhatsAppIco({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={19}
      className="fill-current"
      {...props}
    >
      <g fill="none">
        <path
          stroke="#CBD5E1"
          strokeWidth={1.714}
          d="M8.609 1.51C4.349 1.711.987 5.25 1 9.506a7.9 7.9 0 0 0 .87 3.6L1.105 17.5l4.334-.87a8 8 0 0 0 3.438.833c4.354.066 7.984-3.383 8.12-7.726.145-4.655-3.705-8.45-8.387-8.228Z"
        />
        <path
          fill="#CBD5E1"
          d="m12.883 11.213-1.55-.444a.58.58 0 0 0-.572.15l-.378.385a.565.565 0 0 1-.614.13C9.036 11.138 7.494 9.77 7.1 9.085a.56.56 0 0 1 .045-.624l.33-.427a.57.57 0 0 0 .072-.585l-.652-1.471a.58.58 0 0 0-.903-.207c-.432.365-.945.92-1.008 1.534-.11 1.084.356 2.45 2.117 4.089 2.034 1.894 3.663 2.144 4.724 1.888.601-.145 1.082-.728 1.385-1.205a.576.576 0 0 0-.327-.864"
        />
      </g>
    </svg>
  );
}

export function ContactCallIco({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={16}
      className="fill-current"
      {...props}
    >
      <path
        fill="#CBD5E1"
        d="m15.697 11.323-2.976-.862a1.1 1.1 0 0 0-1.098.292l-.727.747a1.08 1.08 0 0 1-1.179.251c-1.408-.574-4.369-3.228-5.125-4.556a1.1 1.1 0 0 1 .086-1.21l.635-.83c.249-.324.301-.76.137-1.135L4.198 1.166a1.105 1.105 0 0 0-1.733-.4C1.635 1.474.649 2.55.529 3.742c-.211 2.101.683 4.75 4.064 7.932 3.907 3.675 7.035 4.16 9.072 3.663 1.155-.282 2.078-1.413 2.661-2.338a1.122 1.122 0 0 0-.63-1.676"
      />
    </svg>
  );
}
