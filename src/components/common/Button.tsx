import { twClsx } from '../../utils/common';

export function ButtonRound({
  children,
  className,
  ...props
}: {
  children: JSX.Element;
  className: string;
}) {
  const baseCls = 'rounded cursor-pointer text-slate-700 px-2 py-2';

  return (
    <button className={twClsx(baseCls, className)} {...props}>
      {children}
    </button>
  );
}
