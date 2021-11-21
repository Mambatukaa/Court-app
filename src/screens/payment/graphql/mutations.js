const bookingsAdd = `
    mutation bookingsAdd($courtId: String! $scheduleId: String!){
        bookingsAdd(courtId: $courtId scheduleId: $scheduleId ){
            _id
            courtId
            scheduleId
        }
    }
`;

export default { bookingsAdd };
