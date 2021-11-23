import { QueryResponse } from '../../common/types';
import { ICourt, ICourtDoc } from '../court/types';

export interface ISchedule {
  courtId: string;
  startDate: Date;
  endDate: Date;
  price: string;
  bookedPeople: number;
  scheduledCourt: ICourt;
}

export interface IScheduleDoc extends ISchedule {
  _id: string;
}

export type AllSchedulesQueryResponse = {
  allSchedules: IScheduleDoc[];
} & QueryResponse;

export interface IBooking {
  courtId: string;
  userId: string;
  status: string;
  scheduleId: string;

  court: ICourtDoc;
  schedule: IScheduleDoc;
}

export interface IBookingDoc extends IBooking {
  _id: string;
}

export type BookingDetailQueryResponse = {
  bookingDetails: IBooking[];
} & QueryResponse;

export type UserBookingsQueryResponse = {
  userBookings: IBookingDoc[];
} & QueryResponse;
