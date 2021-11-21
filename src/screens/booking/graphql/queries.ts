const userBookings = `
    query userBookings($userId: String!){
        userBookings(userId: $userId){
            _id
            courtId
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

const schedulesMain = `
    query schedulesMain($ids: [String]){
        schedulesMain(ids: $ids){
            _id
            courtId
            startDate
            endDate
            price
            bookedPeople
            
            scheduledCourt{
                _id
                name
                image
                description
                warning
                parking
            }
        }
    }    
`;

export default { userBookings, currentUser, schedulesMain };
