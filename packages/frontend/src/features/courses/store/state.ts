import { Course } from '@/types/Course';

interface CoursesState {
  courses: Course[];
}

export const state: CoursesState = {
  courses: [],
};

export type State = CoursesState;
