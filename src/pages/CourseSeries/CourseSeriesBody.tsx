import { useGetCourseSeriesQuery } from '../../api/apiSice';

export default function CourseSeriesBody() {
  const { data, isError, isLoading, isFetching } = useGetCourseSeriesQuery();

  console.log(data, isError, isLoading, isFetching);

  return <div></div>;
}
