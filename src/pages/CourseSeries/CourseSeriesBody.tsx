import { useGetCourseSeriesQuery } from '../../api/apiSice';
import CSNav from './CSNav';
export default function CourseSeriesBody() {
  const {
    data: data,
    isError,
    isLoading,
    isFetching,
  } = useGetCourseSeriesQuery();

  console.log(data, isError, isLoading, isFetching);

  return (
    <div>
      <CSNav />
    </div>
  );
}
