import { gql } from 'apollo-angular';

export const GET_ALL_FEED = gql`
  query {
    allPosts {
      id
      name
      content
      text
      boostPostMetrics
      imgUrl
    }
  }
`;
