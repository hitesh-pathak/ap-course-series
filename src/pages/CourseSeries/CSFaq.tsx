import clsx from 'clsx';
import {
  SpanTextEn,
  TextSubtitleCtn,
  TextTitleCtn,
} from '../../components/Typography/common';
import { Link } from 'react-router-dom';
import { useGetFaqQuery } from '../../api/apiSice';
import { StartCtnHrz } from '../../components/containers/container';
import ArrowDown from '../../components/icons/ArrowDown';
import { useState } from 'react';
import { SimpleHandler } from '../../types/common';
import { HrzLineSeparator } from '../../components/common/Separator';

export default function CSFaq() {
  return (
    <div
      className={clsx(
        'bg-gradient-to-b from-slate-50',
        'px-4 py-16 md:px-4 lg:px-20'
      )}
    >
      <div className="md:flex">
        <FaqHead />
        <FaqQns />
      </div>
    </div>
  );
}

function FaqHead() {
  return (
    <>
      <div className="pb-10 md:w-1/3 md:pb-0">
        <TextTitleCtn className="font-semibold">
          <SpanTextEn>FAQs</SpanTextEn>
        </TextTitleCtn>
        <p className="pt-1">
          {'Can’t find the answer you’re looking for? Reach out to our '}
          {
            <Link to={'/'}>
              <SpanTextEn className="text-brand-orange-600">support</SpanTextEn>
            </Link>
          }{' '}
          team
        </p>
      </div>
    </>
  );
}

function FaqQns() {
  const {
    data,
    isError,
    error,
    isUninitialized,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetFaqQuery({ language: 'english' });
  const [currentQn, setCurrentQn] = useState<number>();

  if (isSuccess) {
    const items = data.map(({ question, answer }, idx) => {
      return (
        <FaqItem
          key={idx}
          idx={idx}
          qn={question}
          ans={answer}
          currentQn={currentQn}
          setCurrentQn={setCurrentQn}
        />
      );
    });
    return <div className="w-full md:pl-24">{items}</div>;
  }
  return <div className="w-full md:pl-24"></div>;
}

function FaqItem({
  idx,
  qn,
  ans,
  currentQn,
  setCurrentQn,
}: {
  idx: number;
  qn: string;
  ans: string;
  currentQn: number | undefined;
  setCurrentQn: SimpleHandler;
}) {
  const handleClick = () => {
    setCurrentQn(currentQn === idx ? undefined : idx);
  };
  return (
    <div>
      <StartCtnHrz
        className="justify-between md: cursor-pointer"
        onClick={handleClick}
      >
        <TextSubtitleCtn className="pr-2 font-semibold">
          <SpanTextEn>{qn || 'None'}</SpanTextEn>
        </TextSubtitleCtn>
        <div
          className={clsx(
            'h-3 w-3 text-slate-400 hover:text-slate-800',
            'transition duration-500',
            currentQn === idx && 'rotate-180'
          )}
        >
          <ArrowDown width={11} height={7} />
        </div>
      </StartCtnHrz>
      {currentQn === idx && (
        <div className="w-full markdown">
          <TextSubtitleCtn className="md:text-md pt-1 pr-4 leading-normal text-gray-subtitle md:pr-8">
            <span
              className="font-en dynamicHTMLContainer"
              dangerouslySetInnerHTML={{ __html: wrapHtmlinPara(ans) }}
            ></span>
          </TextSubtitleCtn>
        </div>
      )}
      <HrzLineSeparator className="my-4 justify-start" />
    </div>
  );
}

const wrapHtmlinPara = (rawHtml: string) => {
  if (!/^<p>.*<\/p>$/.test(rawHtml.trim())) {
    return `<p>${rawHtml.trim()}</p>`;
  }
  return rawHtml.trim();
};
