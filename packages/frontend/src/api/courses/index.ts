/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import Axios, { AxiosResponse } from 'axios';
import config from '@/config';

import { ref } from 'vue';

const axiosInstance = Axios.create({
  baseURL: config.baseAPIUrl,
  timeout: 1000,
});

export function fetchCourses(): Promise<AxiosResponse<any>> {
  const url = `${config.baseAPIUrl}/v1/courses`;
  return axiosInstance.get(url);
}

export default function useApi() {
  const courses = ref([]);
  async function getCourses() {
    console.log('BEFORE');
    const { data } = await fetchCourses();
    console.log('AFTER');
    courses.value = data;
  }
  return {
    courses,
    getCourses,
  };
}
