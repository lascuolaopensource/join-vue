/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GET_COURSES = gql`query {
    courses {
      id,
      title,
      type,
      difficulty_level,
      price,
      description
    }
  }`;
