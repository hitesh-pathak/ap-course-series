import clsx from 'clsx';
import {
  DefaultCtnProps,
  StartCtnHrz,
  VertFlexCtn,
} from '../containers/container';
import { SpanTextEn } from '../Typography/common';
import { StringDict } from '../../types/common';
import { twClsx } from '../../utils/common';
import { Link } from 'react-router-dom';
import { Fragment, useMemo } from 'react';
import { HrzLineSeparator } from '../common/Separator';

export default function Footer() {
  return (
    <div className="bg-slate-900 px-4 pb-24 md:px-0 md:pb-7 md:pt-10">
      <VertFlexCtn
        className={clsx(
          'md:flex-row md:justify-center',
          'w-full space-y-5 md:space-x-4 md:space-y-0 lg:space-x-16',
          'px-4 pt-8 md:pt-0'
        )}
      >
        <FooterLinkMenus />
      </VertFlexCtn>
      <FooterSeparator />
      <FooterCopyRight />
      <div className="pb-14"></div>
    </div>
  );
}

function FooterLinkMenus() {
  const sections = {
    'LIVE EVENTS': ['Gita Samagam', 'Vedanta: Basics to Classics'],
    'WISDOM CONTENT': ['Video Series', 'AP Books', 'AP Articles', 'AP Circle'],
    MORE: [
      'About Acharya Prashant',
      'Invite Him',
      'Interview Him',
      'Ghar Ghar Upanishad',
      'Media and Public Interaction',
    ],
  };

  return (
    <>
      {Object.entries(sections).map(([heading, items]) => {
        return (
          <FooterLinkMenuVert key={heading} heading={heading} items={items} />
        );
      })}
    </>
  );
}

function FooterLinkMenuVert({
  heading,
  items,
}: {
  heading: string;
  items: string[];
}) {
  const links = items.map((e) => <FooterLink>{e}</FooterLink>);

  return (
    <div>
      <FooterHeadingCtn>
        <SpanTextEn>{heading}</SpanTextEn>
      </FooterHeadingCtn>

      <VertFlexCtn>{links}</VertFlexCtn>
    </div>
  );
}

function FooterLink({ children, className }: DefaultCtnProps) {
  return (
    <Link
      to={'/'}
      className={twClsx(
        'mb-2.5 text-slate-300 ',
        'hover:cursor-pointer hover:text-brand-orange-700',
        className
      )}
    >
      {children}
    </Link>
  );
}

function FooterHeadingCtn({ children, className }: DefaultCtnProps) {
  return (
    <div
      className={twClsx('mb-[13px] font-semibold text-slate-100', className)}
    >
      {children}
    </div>
  );
}

function FooterTextCtn({ children, className }: DefaultCtnProps) {
  return (
    <div className={twClsx('mb-2.5 text-slate-300', className)}>{children}</div>
  );
}

function FooterSeparator() {
  return (
    <HrzLineSeparator className="mx-auto mb-6 mt-6 bg-slate-400 md:mt-[62px] md:w-2/3" />
  );
}

function FooterCopyRight() {
  return (
    <VertFlexCtn
      className={clsx(
        'text-xs md:mx-auto md:flex-row md:justify-center md:text-sm'
      )}
    >
      <FooterTextCtn className="md:pr-20 mb-0">
        Copyright © 2022 PrashantAdvait Foundation
      </FooterTextCtn>
      {['Terms & Conditions', 'Privacy Policy', 'Undertaking'].map((e, i) => {
        return (
          <Fragment key={e}>
            <FooterLink className="mb-0 ">
              <SpanTextEn>{e}</SpanTextEn>
            </FooterLink>
            {i < 2 && <FooterTextCtn className="mb-0">|</FooterTextCtn>}
          </Fragment>
        );
      })}
    </VertFlexCtn>
  );
}
