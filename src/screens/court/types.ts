import { QueryResponse } from '../../common/types';
import { IScheduleDoc } from '../booking/types';

export interface ICourt {
  createdAt: Date;
  name: string;
  featuredImage: string;
  secondaryImages: string[];
  description: string;
  warning: string;
  parking: string;
  surface: string;
  format: string;

  courtSchedule: IScheduleDoc[];
}

export interface ICourtDoc extends ICourt {
  _id: string;
}

export type CourtsMainQueryResponse = {
  courtsMain: ICourtDoc[];
} & QueryResponse;

export type CourtDetailQueryResponse = {
  courtDetail: ICourtDoc;
} & QueryResponse;
