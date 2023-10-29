import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceReviewInterface {
  id?: string;
  user_id: string;
  review_date: any;
  reviewer_id: string;
  rating: number;
  comments: string;
  next_review_date: any;
  created_at?: any;
  updated_at?: any;

  user_performance_review_user_idTouser?: UserInterface;
  user_performance_review_reviewer_idTouser?: UserInterface;
  _count?: {};
}

export interface PerformanceReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  reviewer_id?: string;
  comments?: string;
}
