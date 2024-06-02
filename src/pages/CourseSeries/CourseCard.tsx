import clsx from 'clsx';
import {
  SpanTextHi,
  TextTitleCtn,
  TextSubtitleCtn,
  SpanTextEn,
} from '../../components/Typography/common';
import {
  StartCtnHrz,
  TagRoundXs,
  VertFlexCtn,
} from '../../components/containers/container';
import { capitalizeFirstLetter } from '../../utils/common';
import { ICSCourse } from './CSCourses';
import { Fragment } from 'react/jsx-runtime';
import { BtnRndTransition } from '../../components/common/Button';
import { VertLineSeparator } from '../../components/common/Separator';
import { StringDict } from '../../types/common';

export default function CourseCard({
  title,
  subtitle,
  amount,
  originalAmount,
  courseHours,
  language,
  highlightTags,
  series,
}: Omit<ICSCourse, 'id'>) {
  const courseTags: StringDict<boolean> = {};
  if (language) {
    courseTags[language] = false;
  }
  if (Array.isArray(highlightTags) && highlightTags.length >= 1) {
    highlightTags.reduce((acc, curr) => {
      if (curr) {
        acc[curr] = true;
      }
      return acc;
    }, courseTags);
  }

  // const courseTags = [
  //   language,
  //   ...(Array.isArray(highlightTags) ? highlightTags : []),
  // ];

  return (
    <VertFlexCtn className="space-y-2">
      <div className="pb-2 self-start">
        <PartPointer partText={`भाग ${series.order.seq || 0}`} />
      </div>
      <VertFlexCtn className="w-full text-left">
        <CourseBody
          {...{ title, subtitle, amount, originalAmount, courseHours }}
        />
        <CourseTagMenu tags={courseTags} />
        {/* <StartCtnHrz className="flex-wrap text-xs mt-2 mr-1"> */}
        {/* <CourseLngTag language={language} /> */}
        {/* </StartCtnHrz> */}
      </VertFlexCtn>
      <CourseBottomMenu />
    </VertFlexCtn>
  );
}

function CourseBody({
  title,
  subtitle,
  amount,
  originalAmount,
  courseHours,
}: Omit<ICSCourse, 'id' | 'language' | 'series'>) {
  const duration = calcDuration(courseHours) || '0 hours';

  return (
    <div>
      <TextTitleCtn className="leading-normal">
        <SpanTextHi>{title}</SpanTextHi>
      </TextTitleCtn>
      <TextSubtitleCtn className="text-sm lg:text-base leading-normal">
        <SpanTextHi>{subtitle}</SpanTextHi>
      </TextSubtitleCtn>
      <TextSubtitleCtn className="pt-1 text-xs lg:text-sm">
        <SpanTextHi>{duration}</SpanTextHi>
      </TextSubtitleCtn>
      <TextSubtitleCtn className="pt-1 text-xs lg:text-sm">
        <SpanTextEn>Contribution: ₹{amount}</SpanTextEn>
        <del>
          <SpanTextEn className="pl-1">₹{originalAmount}</SpanTextEn>
        </del>
      </TextSubtitleCtn>
    </div>
  );
}

function CourseTagMenu({ tags }: { tags: StringDict<boolean> }) {
  const menu = Object.entries(tags).map(([t, isHighlight]) => {
    return <CourseTag key={t} tagText={t} isHighlight={isHighlight} />;
  });
  return (
    <StartCtnHrz className="flex-wrap text-xs mr-1 mt-2">{menu}</StartCtnHrz>
  );
}

function CourseTag({
  tagText,
  isHighlight,
}: {
  tagText: string;
  isHighlight: boolean;
}) {
  return (
    <TagRoundXs
      className={clsx(
        'px-1.5 py-0.5 mr-1',
        'text-slate-700',
        isHighlight ? 'bg-brand-orange-100' : 'bg-blue-background'
      )}
    >
      <SpanTextEn>{capitalizeFirstLetter(tagText) || 'None'}</SpanTextEn>
    </TagRoundXs>
  );
}

function CourseBottomMenu() {
  const items = ['ADD TO CART', 'ENROLL'];

  const menu = items.map((e, i) => {
    return (
      <Fragment key={e}>
        <BtnRndTransition className="btn-base bg-transparent text-brand-orange-600 hover:text-brand-orange-700">
          <SpanTextEn>{e}</SpanTextEn>
        </BtnRndTransition>
        {items.length - i > 1 && (
          <div className="self-stretch py-2">
            <VertLineSeparator />
          </div>
        )}
      </Fragment>
    );
  });
  return (
    <StartCtnHrz className="space-x-3 font-medium text-xs">{menu}</StartCtnHrz>
  );
}

function PartPointer({ partText }: { partText: string }) {
  return (
    <div
      className={clsx(
        'part-pointer relative h-[24px] flex items-center justify-center',
        'rounded bg-part-pointer-blue',
        'px-2 pt-[3px] text-center font-medium text-xs text-white'
      )}
    >
      <SpanTextHi>{partText}</SpanTextHi>
      <>&nbsp;</>
    </div>
  );
}

function calcDuration(courseHours: ICSCourse['courseHours']) {
  let hours = Math.floor(courseHours);
  let minutes = Math.round((courseHours - hours) * 60);
  if (minutes >= 60) {
    hours += 1;
    minutes = 0;
  }
  return (
    (hours ? `${String(hours)} ${hours === 1 ? 'hour' : 'hours'}` : '') +
    ' ' +
    (minutes
      ? `${String(minutes)} ${minutes === 1 ? 'minute' : 'minutes'}`
      : '')
  );
}
