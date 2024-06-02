import { Suspense, lazy } from 'react';
import SecondNavBar from '../../components/SecondNavBar/SecondNavBar';
import { SpinnerFullScreen } from '../../components/common/Spinner';
// import CourseSeriesBody from './CourseSeriesBody';

const CourseSeriesBody = lazy(() => delayForDemo(import('./CourseSeriesBody')));
const AppLinkBanner = lazy(() => import('./CSAppLinkBanner'));
export default function CourseSeries() {
  return (
    <div className="flex-grow min-h-full w-full">
      <SecondNavBar />
      <div className="relative mx-auto max-w-screen-2xl">
        <Suspense fallback={<SpinnerFullScreen />}>
          <CourseSeriesBody />
        </Suspense>
        <Suspense fallback={<></>}>
          <AppLinkBanner />
        </Suspense>
      </div>
    </div>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
