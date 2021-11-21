import { QueryResponse } from '../../common/types';
import { ISchedule } from '../booking/types';

export interface ICourt {
  createdAt: Date;
  name: string;
  image: string;
  description: string;
  warning: string;
  parking: string;
  surface: string;
  format: string;

  courtSchedule: ISchedule[];
}

export interface ICourtDoc extends ICourt {
  _id: string;
}

export type CourtsMainQueryResponse = {
  courtsMain: ICourtDoc[];
} & QueryResponse;
