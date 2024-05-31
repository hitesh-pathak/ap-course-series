export function SpanTextEn({ children, ...props }: { children: string }) {
  return (
    <span className="font-en" {...props}>
      {children}
    </span>
  );
}
