const bookingAdd = `
    mutation bookingAdd($courtId: String! $userId: String! $scheduleId: String!){
        bookingAdd(courtId: $courtId userId: $userId scheduleId: $scheduleId ){
            _id
            courtId
            userId
            scheduleId
        }
    }
`;

export default { bookingAdd };
