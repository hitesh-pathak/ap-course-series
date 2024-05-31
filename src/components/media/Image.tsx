import { HTMLAttributes } from 'react';
import { twClsx } from '../../utils/common';

export interface DefaultImgProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  classNames?: string;
}

export function ContainImg({ src, alt, className }: DefaultImgProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={twClsx('object-contain', className)}
    ></img>
  );
}

export function TextLogoImg({ src, alt, className }: DefaultImgProps) {
  return (
    <ContainImg
      src={src}
      alt={alt}
      className={twClsx('h-text-logo md:h-text-logo-md', className)}
    />
  );
}

export function APSignLogo({ className }: { className?: string }) {
  return (
    <TextLogoImg
      src="https://acharyaprashant.org/images/ic_apsignature_hindi.png"
      alt="AP Sign Logo"
      className={className}
    />
  );
}
