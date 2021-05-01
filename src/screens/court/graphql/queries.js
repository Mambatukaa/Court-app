const courtFields = `
    _id
    createdAt
    name
    description
    warning
    parking
    slotSize
    courtDetail
    image 
    location {
        lat
        lng
      }

    courtSchedule{
        _id
        day
        startTime
        endTime
        bookedPeople
        price
    }
`;

const queryParamsDef = `
    $searchValue: String
    $minPrice: String
    $maxPrice: String
`;

const queryParamsVal = `
    searchValue: $searchValue
    minPrice: $minPrice
    maxPrice: $maxPrice
`;

const allCourts = `
    query allCourts(${queryParamsDef}){
        allCourts(${queryParamsVal}){
            ${courtFields}
            
        }
    }
`;

const courtDetail = `
    query courtDetail($_id: String!){
        courtDetail(_id: $_id){
            ${courtFields}
            
        }
    }
`;

export default {
  allCourts,
  courtDetail
};
