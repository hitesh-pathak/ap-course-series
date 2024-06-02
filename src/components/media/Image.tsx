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

export function APFavicon({ className = '' }: { className?: string }) {
  return (
    <img
      className={twClsx('mr-2 h-6 w-6', className)}
      src="https://acharyaprashant.org/images/ic_favicon.png"
      alt="Acharya Prashant"
    ></img>
  );
}

export function GPlayStore() {
  return (
    <img
      src="https://acharyaprashant.org/images/ic_googleplay.png"
      alt="Get it on Google Play"
      className="rounded-md border-[1.4px] border-slate-300"
    ></img>
  );
}

export function AppleStore() {
  return (
    <img
      src="https://acharyaprashant.org/images/ic_appstore.png"
      alt="Download on the App Store"
      className="rounded-md border-[1.4px] border-slate-300"
    ></img>
  );
}
