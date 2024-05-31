export function SpanTextEn({ children, ...props }: { children: string }) {
  return (
    <span className="font-en" {...props}>
      {children}
    </span>
  );
}

export function SpanTextHi({ children, ...props }: { children: string }) {
  return (
    <span className="font-hi" {...props}>
      {children}
    </span>
  );
}
