const courtFields = `
    _id
    createdAt
    name
    shortName
    price
    description
    warning
    parking
    courtDetail
    image 
    location {
        lat
        lng
      }
`;

const allCourts = `
    query allCourts{
        allCourts{
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
