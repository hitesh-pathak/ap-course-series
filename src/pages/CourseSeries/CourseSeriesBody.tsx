import { useGetCourseSeriesQuery } from '../../api/apiSice';
import CSNav from './CSNav';
import { SpinnerFullScreen } from '../../components/common/Spinner';
import CSHero from './CSHero';
import CSCourses from './CSCourses';
import { Suspense, lazy } from 'react';

const CSFaq = lazy(() => import('./CSFaq'));
export default function CourseSeriesBody() {
  const {
    data: data,
    isError,
    error,
    isUninitialized,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetCourseSeriesQuery();

  if (isUninitialized || isLoading || isFetching) {
    return <SpinnerFullScreen />;
  } else if (isError) {
    throw error;
  } else if (!data) {
    throw new Error('Got invalid data from the server');
  } else if (isSuccess) {
    return (
      <div>
        <CSNav />
        <CSHero />
        <CSCourses />
        <Suspense fallback={<></>}>
          <CSFaq />
        </Suspense>
      </div>
    );
  } else {
    throw new Error('Unexpected error');
  }
}
