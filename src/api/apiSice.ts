import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StringDict } from '../types/common';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.acharyaprashant.org/v2/legacy/courses',
  }),
  endpoints: (builder) => ({
    getCourseSeries: builder.query<StringDict<any>, void>({
      query: () => 'series/optuser/cs-5ddbd9',
    }),
  }),
});

export const { useGetCourseSeriesQuery } = apiSlice;
