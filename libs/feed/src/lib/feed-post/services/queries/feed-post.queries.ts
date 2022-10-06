import { gql } from 'apollo-angular';

export const GET_ALL_FEED_POSTS = gql`
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
