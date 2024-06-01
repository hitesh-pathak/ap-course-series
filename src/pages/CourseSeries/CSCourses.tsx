import clsx from 'clsx';
import { SpanTextEn, TextTitleCtn } from '../../components/Typography/common';
import { SectionCtn } from '../../components/containers/container';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { HrzLineSeparator } from '../../components/common/Separator';
import { useSelector } from 'react-redux';
import { selectCouseSeries } from '../../api/csSlice';
import { RootState } from '../../store';
import { Grid1To4Cols, GridAutoFill } from '../../components/containers/grid';

export interface ICSCourse {
  id: string;
  title: string;
  subtitle: string;
  language: string;
  amount: number;
  originalAmount: number;
  courseHours: number;
  highlightTags?: string[];
}

export default function CSCourses() {
  const csCourses: ICSCourse[] = useSelector(
    (state: RootState) => selectCouseSeries(state)?.courses || []
  );

  return (
    <>
      <SectHeading numCourses={csCourses.length} />
      <CoursesGrid courses={csCourses} />
    </>
  );
}

function CoursesGrid({ courses }: { courses: ICSCourse[] }) {
  const courseCards = courses.map((c) => {
    return (
      <Link
        key={c.id || c.title}
        to={'/'}
        className={clsx(
          'flex flex-col justify-between group',
          'space-y-2 px-4 pt-4 cursor-pointer overflow-hidden',
          'hover:bg-slate-100 hover:lg:shadow',
          'lg:rounded-lg '
        )}
      >
        <CourseCard {...c} />
        <div className="pt-2 group-hover:invisible">
          <HrzLineSeparator />
        </div>
      </Link>
    );
  });

  return (
    <Grid1To4Cols className="gap-x-4 lg:gap-x-8 md:gap-y-4 lg:px-4">
      {courseCards}
    </Grid1To4Cols>
  );
}

function SectHeading({ numCourses = 97 }: { numCourses: number }) {
  return (
    <SectionCtn>
      <TextTitleCtn className={clsx('mt-8 md:mt-12 lg:mt-16', 'md:text-xl')}>
        <SpanTextEn>{`Video Series (${numCourses})`}</SpanTextEn>
      </TextTitleCtn>
      <HrzLineSeparator className="mt-1 md:mt-2" />
    </SectionCtn>
  );
}
