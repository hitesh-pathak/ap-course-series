import clsx from 'clsx';
import { useState } from 'react';

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  PlainIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  HoverIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export function SocialHoverFillIcon({ PlainIcon, HoverIcon }: IconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div slot="icon">
      <div>
        <div slot={isHovered ? 'icon-hovered' : 'icon-not-hovered'}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={clsx('share-icon px-1.5', { 'scale-125': isHovered })}
          >
            {!isHovered ? (
              <SocialIconSmall Icon={PlainIcon} />
            ) : (
              <SocialIconSmall Icon={HoverIcon} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialIconSmall({
  Icon,
}: {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}) {
  return <Icon className="h-7 w-7" />;
}
