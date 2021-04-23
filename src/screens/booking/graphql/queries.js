const bookingDetails = `
    query bookingDetails($userId: String!){
        bookingDetails(userId: $userId){
            _id
            courtId
            userId
            status
            scheduleId
        }
    }
`;

const currentUser = `
    query currentUser{
        currentUser{
            _id
            username
            email
        }
    }
`;

const allSchedules = `
    query allSchedules($ids: [String]){
        allSchedules(ids: $ids){
            _id
            day
            courtId
            startTime
            endTime
            price
            bookedPeople
            scheduledCourt{
                _id
                createdAt
                name
                image
                description
                warning
                parking
                courtDetail
            }
        }
    }    
`;

export default { bookingDetails, currentUser, allSchedules };
