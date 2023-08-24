import { CarInterface } from 'interfaces/car';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_date: any;
  end_date: any;
  status: string;
  car_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  car_id?: string;
  user_id?: string;
}
