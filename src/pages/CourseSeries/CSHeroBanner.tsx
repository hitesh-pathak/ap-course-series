import clsx from 'clsx';
import {
  HiddenSmCtn,
  SectionCtn,
  StartCtnHrz,
  VertFlexCtn,
} from '../../components/containers/container';
import { ThumbnailSigned } from '../../components/media/Thumbnail';
import {
  SpanTextHi,
  SpanTextEn,
  TextTitleCtn,
  TextSubtitleCtn,
} from '../../components/Typography/common';
import { SocialHoverFillIcon } from '../../components/social-media/common';
import FBPlain from '../../components/social-media/icons/FBPlain';
import FBCircleInverted from '../../components/social-media/icons/FBCircleInverted';
import XPlain from '../../components/social-media/icons/XPlain';
import XCircleInverted from '../../components/social-media/icons/XCircleInverted';
import WhatsAppPlain from '../../components/social-media/icons/WhatsAppPlain';
import WhatsAppCircleInverted from '../../components/social-media/icons/WhatsAppCircleInverted';
import LinkedInPlain from '../../components/social-media/icons/LinkedInPlain';
import LinkedInCircleInverted from '../../components/social-media/icons/LinkedInCircleInverted';

interface CSHeroProps {
  thumbnailSrc: string;
  csSubTitle: string;
  csDesc: string;
}

export default function CSHeroBanner({
  thumbnailSrc,
  csSubTitle,
  csDesc,
}: CSHeroProps) {
  return (
    <SectionCtn>
      <StartCtnHrz className="flex-col md:flex-row md:items-start">
        <div className="w-full shrink-0 md:w-2/5">
          <div className="w-full aspect-[16/9]">
            <ThumbnailSigned src={thumbnailSrc} alt="Course Image Thumbnail" />
          </div>
          <CSShareSmm />
        </div>

        <VertFlexCtn
          className={clsx(
            'self-stretch',
            'pt-4 md:pt-0 md:pl-4',
            'text-sm lg:text-lg'
          )}
        >
          <TextTitleCtn className="lg:text-xl">
            <SpanTextHi>{csSubTitle}</SpanTextHi>
          </TextTitleCtn>
          <TextSubtitleCtn className="text-justify md:pr-4">
            {/* TODO: read more functionality */}
            <div>
              <SpanTextHi>{csDesc}</SpanTextHi>
            </div>
          </TextSubtitleCtn>
        </VertFlexCtn>
      </StartCtnHrz>
    </SectionCtn>
  );
}

function CSShareSmm() {
  const smm_icons = {
    fb: {
      plain: FBPlain,
      hover: FBCircleInverted,
      link: 'https://www.facebook.com/AdvaitAcharyaPrashant',
    },
    x: {
      plain: XPlain,
      hover: XCircleInverted,
      link: 'https://x.com/intent/post?url=https%3A%2F%2Facharyaprashant.org%2Fen%2Fvideo-modules%2Fseries%2Fcs-5ddbd9&text=%0A&hashtags=AcharyaPrashant%2CVideoSeries%2Cwisdom%2Cspirituality',
    },
    wapp: {
      plain: WhatsAppPlain,
      hover: WhatsAppCircleInverted,
      link: 'https://api.whatsapp.com/send/?text=%0Ahttps%3A%2F%2Facharyaprashant.org%2Fen%2Fvideo-modules%2Fseries%2Fcs-5ddbd9&type=custom_url&app_absent=0',
    },
    linkedIn: {
      plain: LinkedInPlain,
      hover: LinkedInCircleInverted,
      link: 'https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%2F%3Furl%3Dhttps%3A%2F%2Facharyaprashant.org%2Fen%2Fvideo-modules%2Fseries%2Fcs-5ddbd9',
    },
  };

  return (
    <HiddenSmCtn className="pt-4">
      <VertFlexCtn className="items-center md:items-start">
        <>
          <TextTitleCtn className="text-sm pb-3 md:pb-1">
            <SpanTextEn>Share this series:</SpanTextEn>
          </TextTitleCtn>
          <div className="w-full px-8 md:px-0 md:mt-2 md:-ml-1.5">
            <StartCtnHrz className="w-full justify-center md:justify-start gap-6">
              <>
                {Object.entries(smm_icons).map(([key, icons]) => (
                  <a
                    key={key}
                    href={icons.link ?? 'about:blank'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SocialHoverFillIcon
                      PlainIcon={icons.plain}
                      HoverIcon={icons.hover}
                    />
                  </a>
                ))}
              </>
            </StartCtnHrz>
          </div>
        </>
      </VertFlexCtn>
    </HiddenSmCtn>
  );
}
