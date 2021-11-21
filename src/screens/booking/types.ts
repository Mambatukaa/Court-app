import { QueryResponse } from '../../common/types';
import { ICourt } from '../court/types';

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
}

export interface IBookingDoc extends IBooking {
  _id: string;
}

export type BookingDetailQueryResponse = {
  bookingDetails: IBooking[];
} & QueryResponse;

export type UserBookingsQueryResponse = {
  userBookings: IBooking[];
} & QueryResponse;
