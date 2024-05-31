import { createSelector } from '@reduxjs/toolkit';
import { apiSlice } from './apiSice';
import { RootState } from '../store';

export const selectCourseSeriesResult =
  apiSlice.endpoints.getCourseSeries.select();

export const selectCouseSeries = createSelector(
  (state: RootState) => selectCourseSeriesResult(state),
  (csResult) => csResult?.data ?? {}
);
