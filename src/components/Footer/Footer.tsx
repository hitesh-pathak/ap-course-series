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
import {
  YoutubeIco,
  XIco,
  FBIco,
  IGIco,
  WikiIco,
  ThreadsIco,
} from '../social-media/icons/FooterSocialIcons';
import { APFavicon, GPlayStore, AppleStore } from '../media/Image';
import {
  ContactCallIco,
  ContactMailIco,
  ContactWhatsAppIco,
} from '../icons/FooterIcons';

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
        <SocialMediaSect />
        <AppLinksSect />
        <ContactUsSect />
      </VertFlexCtn>
      <FooterSeparator />
      <FooterCopyRight />
      <div className="pb-14"></div>
    </div>
  );
}

function ContactUsSect() {
  return (
    <div>
      <FooterHeadingCtn>
        <SpanTextEn>CONTACT US</SpanTextEn>
      </FooterHeadingCtn>

      <ContactItem
        className="mb-2.5"
        Icon={<ContactMailIco />}
        text={'support@advait.org.in'}
      />
      <ContactItem
        className="mb-[13px]"
        Icon={<ContactWhatsAppIco />}
        text={'+91 9650585100'}
      />
      <ContactItem
        className="mb-5"
        Icon={<ContactCallIco />}
        text={'+91 9650585100'}
      />
    </div>
  );
}

function ContactItem({
  Icon,
  text,
  className,
}: {
  Icon: JSX.Element;
  text: string;
  className: string;
}) {
  return (
    <StartCtnHrz className={twClsx('justify-start', className)}>
      <div className="pr-2 text-slate-300">{Icon}</div>
      <FooterLink className="mb-0">{text}</FooterLink>
    </StartCtnHrz>
  );
}

function AppLinksSect() {
  return (
    <div>
      <FooterHeadingCtn>
        <SpanTextEn>DOWNLOAD APP</SpanTextEn>
      </FooterHeadingCtn>

      <div className="mb-5 hidden items-center md:flex">
        <APFavicon />
        <div className="text-slate-100 lg:whitespace-nowrap">
          <SpanTextEn>Acharya Prashant</SpanTextEn>
        </div>
      </div>

      <div className="flex md:flex-col">
        <div className="mr-4 h-8 w-28 md:mb-5 md:mr-0 md:w-[114px]">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks"
          >
            <GPlayStore />
          </a>
        </div>
        <div className="h-8 w-28 md:w-[114px]">
          <a
            target="_blank"
            href="https://apps.apple.com/in/app/acharya-prashant/id1603611866"
          >
            <AppleStore />
          </a>
        </div>
      </div>
    </div>
  );
}

function SocialMediaSect() {
  return (
    <div>
      <FooterHeadingCtn>
        <SpanTextEn>SOCIAL MEDIA</SpanTextEn>
      </FooterHeadingCtn>

      <VertFlexCtn className="mb-6">
        <FooterTextCtn>
          <SpanTextEn>For English</SpanTextEn>
        </FooterTextCtn>
        <SocialIconsEn />
      </VertFlexCtn>
      <VertFlexCtn>
        <FooterTextCtn>
          <SpanTextEn>For Hindi</SpanTextEn>
        </FooterTextCtn>
        <SocialIconsHi />
      </VertFlexCtn>
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
  const links = items.map((e) => <FooterLink key={e}>{e}</FooterLink>);

  return (
    <div>
      <FooterHeadingCtn>
        <SpanTextEn>{heading}</SpanTextEn>
      </FooterHeadingCtn>

      <VertFlexCtn>{links}</VertFlexCtn>
    </div>
  );
}

function SocialIcons({ icons }: { icons: JSX.Element[] }) {
  return (
    <div className="flex space-x-2">
      {icons.map((Icon, i) => {
        return (
          <div key={i} className="text-slate-300 hover:text-brand-700">
            <Link to={'/'}>{Icon}</Link>
          </div>
        );
      })}
    </div>
  );
}

function SocialIconsEn() {
  const icons = [<YoutubeIco />, <XIco />, <FBIco />, <IGIco />, <WikiIco />];
  return <SocialIcons icons={icons} />;
}

function SocialIconsHi() {
  const icons = [
    <YoutubeIco />,
    <XIco />,
    <ThreadsIco />,
    <FBIco />,
    <IGIco />,
  ];
  return <SocialIcons icons={icons} />;
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
      <SpanTextEn>{children}</SpanTextEn>
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
      <div className="flex space-x-2 pt-2 md:pt-0">
        {['Terms & Conditions', 'Privacy Policy', 'Undertaking'].map((e, i) => {
          return (
            <Fragment key={e}>
              <FooterLink className="mb-0">
                <SpanTextEn>{e}</SpanTextEn>
              </FooterLink>
              {i < 2 && <FooterTextCtn className="mb-0">|</FooterTextCtn>}
            </Fragment>
          );
        })}
      </div>
    </VertFlexCtn>
  );
}
