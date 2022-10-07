import { gql } from 'apollo-angular';

export const GET_ALL_FEED = gql`
  query {
    allFeeds {
      id
      name
      content
      text
      boostPostMetrics
      imgUrl
    }
  }
`;
