import { QueryResponse } from '../../common/types';

export interface ICourt {
  createdAt: Date;
  name: string;
  image: string;
  description: string;
  warning: string;
  parking: string;
  courtDetail: string;
  slotSize: string;

  courtSchedule: any[];
}

export interface ICourtDoc extends ICourt {
  _id: string;
}

export type CourtsMainQueryResponse = {
  courtsMain: ICourtDoc[];
} & QueryResponse;
