import SecondNavBar from '../../components/SecondNavBar/SecondNavBar';
import CourseSeriesBody from './CourseSeriesBody';

export default function CourseSeries() {
  return (
    <div className="flex-grow min-h-full w-full">
      <SecondNavBar />
      <div className="relative mx-auto max-w-screen-2xl">
        {/* body comes here */}
        <CourseSeriesBody />
      </div>
    </div>
  );
}
