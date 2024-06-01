import { twClsx } from '../../utils/common';

interface DefaultBtnProps {
  children: JSX.Element;
  className?: string;
}

export function BtnRound({
  children,
  className = '',
  ...rest
}: DefaultBtnProps) {
  return (
    <button
      className={twClsx(
        'rounded-md cursor-pointer text-center text-slate-700 px-2 py-1',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function BtnRndTransition({
  children,
  className = '',
  ...rest
}: DefaultBtnProps) {
  return (
    <BtnRound
      className={twClsx('transition-colors duration-150', className)}
      {...rest}
    >
      {children}
    </BtnRound>
  );
}

export function BtnRndTransparent({
  children,
  className = '',
  ...rest
}: DefaultBtnProps) {
  return (
    <BtnRound className={twClsx('bg-transparent', className)} {...rest}>
      {children}
    </BtnRound>
  );
}
