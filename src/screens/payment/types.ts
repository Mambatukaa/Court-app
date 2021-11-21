export type BookingsAddMutationVariables = {
  courtId: string;
  scheduleId: string;
};

export type BookingsAddMutationResponse = {
  bookingsAdd: (params: {
    variables: BookingsAddMutationVariables;
  }) => Promise<any>;
};
