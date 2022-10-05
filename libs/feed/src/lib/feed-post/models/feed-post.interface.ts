/**
 * Interface for the 'FeedPost' data
 */
export interface FeedPostEntity {
  id: string | number;
  name: string;
  content: string;
  text: string;
  boostPostMetrics: IMetrics;
}

export interface IMetrics {
  likes: number;
  shares: number;
  totalReach: number;
}