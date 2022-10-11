import { gql } from 'apollo-angular';

export const GET_ALL_FEED = gql`
  query AllFeeds {
    allFeeds {
      id
      name
      content
      text
      boostPostMetrics
      imgUrl
      videoUrl
      isShared
      isLiked
      __typename
    }
  }
`;
