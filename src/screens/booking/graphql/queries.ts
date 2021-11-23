const userBookings = `
    query userBookings($userId: String!){
        userBookings(userId: $userId){
            _id
            courtId
            scheduleId,

            court {
                name
                description
                
                featuredImage
            }

            schedule {
                startDate
                endDate
                price
            }
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
export default { userBookings, currentUser };
