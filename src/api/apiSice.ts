import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StringDict } from '../types/common';
import { CourseTagsApiT, CourseFaqApiT } from './types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.acharyaprashant.org/v2/legacy/courses',
  }),
  endpoints: (builder) => ({
    getCourseSeries: builder.query<StringDict<any>, void>({
      query: () => 'series/optuser/cs-5ddbd9',
    }),
    getCourseTags: builder.query<CourseTagsApiT, void>({
      query: () => 'tags',
    }),
    getFaq: builder.query<CourseFaqApiT, { language: string }>({
      query: ({ language }) => ({
        url: 'faqs',
        params: { language },
      }),
    }),
  }),
});

export const {
  useGetCourseSeriesQuery,
  useGetCourseTagsQuery,
  useGetFaqQuery,
} = apiSlice;
