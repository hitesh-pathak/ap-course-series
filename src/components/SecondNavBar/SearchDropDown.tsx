import clsx from 'clsx';
import { RespMenuItemCtn, VertScrollMenuCtn } from '../containers/container';
import { SpanTextEn } from '../Typography/common';
import { useGetCourseTagsQuery } from '../../api/apiSice';
import { CourseTagsApiT, ICourseTag } from '../../api/types';
import ArrowMenuDivider from '../icons/ArrowMenuDivider';
import { useState } from 'react';
import { SimpleHandler } from '../../types/common';

export default function SearchDropDown() {
  const {
    data,
    isError,
    error,
    isUninitialized,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetCourseTagsQuery();

  if (isSuccess) {
    return <MenuWrap tagsList={data} />;
  }
}

function MenuWrap({ tagsList }: { tagsList: CourseTagsApiT }) {
  const [tagsL1, tagsL2] = tagsList;
  const [currentTag, setCurrentTag] = useState<number>();
  return (
    <div
      className={clsx(
        'flex h-[60vh] min-w-0 items-stretch',
        'rounded-lg bg-white shadow-lg'
      )}
    >
      <Menu
        tags={[allMenuEntry, ...tagsL1]}
        setCurrentTag={setCurrentTag}
        currentTag={currentTag}
      />
      {typeof currentTag === 'number' && (
        <Menu tags={tagsL2} setCurrentTag={undefined} currentTag={currentTag} />
      )}
    </div>
  );
}

function Menu({
  tags,
  setCurrentTag,
  currentTag,
}: {
  tags: ICourseTag[];
  setCurrentTag: SimpleHandler | undefined;
  currentTag: number | undefined;
}) {
  const items = tags
    .filter((t) => !t.level || t.parent === currentTag)
    .map((t) => {
      return (
        <MenuItem
          key={t.tagId}
          tagId={t.tagId}
          name={t.name}
          hasChildren={t.hasChildren}
          setCurrentTag={setCurrentTag}
        ></MenuItem>
      );
    });

  return <VertScrollMenuCtn>{items}</VertScrollMenuCtn>;
}

function MenuItem({
  tagId,
  name,
  hasChildren,
  setCurrentTag,
}: Pick<ICourseTag, 'tagId' | 'name' | 'hasChildren'> & {
  setCurrentTag: SimpleHandler | undefined;
}) {
  return (
    <RespMenuItemCtn
      className={clsx(
        'py-1.5 px-4',
        'hover:rounded hover:bg-slate-100 hover:text-brand-orange-600'
      )}
      onMouseEnter={setCurrentTag ? () => setCurrentTag(tagId) : undefined}
    >
      <MenuText text={name.english || 'None'} />
      {hasChildren && (
        <div>
          <ArrowMenuDivider width={7} height={11} className="fill-current" />
        </div>
      )}
    </RespMenuItemCtn>
  );
}

function MenuText({ text }: { text: string }) {
  return (
    <div
      className={clsx('whitespace-nowrap text-sm lg:text-base', 'pr-2 lg:pr-6')}
    >
      <SpanTextEn>{text}</SpanTextEn>
    </div>
  );
}

const allMenuEntry: ICourseTag = {
  name: {
    english: 'All',
    hindi: 'None',
  },
  hasChildren: false,
  level: 0,
  parent: 0,
  tagId: -1,
};
