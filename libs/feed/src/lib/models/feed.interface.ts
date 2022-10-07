export interface FeedEntity {
  id: string | number;
  name: string;
  content: string;
  text: string;
  boostPostMetrics: IMetrics;
  imgUrl: string;
}

export interface IMetrics {
  likes: number;
  shares: number;
  totalReach: number;
}
