import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  job_id: string;
  user_id: string;
  application_date: any;
  status: string;
  resume: string;
  cover_letter: string;
  created_at?: any;
  updated_at?: any;

  job?: JobInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_id?: string;
  user_id?: string;
  status?: string;
  resume?: string;
  cover_letter?: string;
}
