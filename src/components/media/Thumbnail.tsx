import { APSignLogo, DefaultImgProps } from './Image';
import { twClsx } from '../../utils/common';
import { FullExpandCtn } from '../containers/container';
import clsx from 'clsx';

export function ThumbnailImg({
  src,
  alt = 'Thumbnail',
  className,
}: DefaultImgProps & { alt?: string }) {
  return (
    <img
      className={twClsx('h-full w-full object-cover', className)}
      alt={alt}
      src={src}
    ></img>
  );
}

export function ThumbnailSigned({
  src,
  alt = 'Thumbnail',
  className,
}: DefaultImgProps & { alt?: string }) {
  return (
    <FullExpandCtn className={twClsx('relative rounded', className)}>
      <>
        <ThumbnailImg src={src} alt={alt} />
        {/* thumbnail gradient */}
        <div
          className={clsx(
            'absolute bottom-0 left-0',
            'w-full h-1/3',
            'bg-gradient-to-t from-black'
          )}
        ></div>
        <APSignLogo className={clsx('absolute bottom-1 right-1')} />
      </>
    </FullExpandCtn>
  );
}
