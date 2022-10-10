export interface FeedEntity {
  id: string | number;
  name: string;
  content: string;
  text: string;
  boostPostMetrics: IMetrics;
  imgUrl: string;
  isShared: boolean;
}

export interface IMetrics {
  likes: number;
  shares: number;
  totalReach: number;
}
