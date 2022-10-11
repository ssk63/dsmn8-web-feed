export interface IFeed {
  __typename: string;
  id: string | number;
  name: string;
  content: string;
  text: string;
  boostPostMetrics: IMetrics;
  imgUrl?: string;
  videoUrl?: string;
  isShared: boolean;
  isLiked: boolean;
}

export interface IMetrics {
  likes: number;
  shares: number;
  totalReach: number;
}
