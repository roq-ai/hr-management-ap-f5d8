import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  user_id: string;
  check_in_time: any;
  check_out_time: any;
  date: any;
  status: string;
  notes?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  status?: string;
  notes?: string;
}
