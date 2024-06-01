interface TagName {
  hindi: string;
  english: string;
}

export interface ICourseTag {
  name: TagName;
  tagId: number;
  level: number;
  hasChildren: boolean;
  parent: number;
}

export type CourseTagsApiT = [ICourseTag[], ICourseTag[]];

export interface ICourseFaq {
  question: string;
  answer: string;
}
export type CourseFaqApiT = ICourseFaq[];
