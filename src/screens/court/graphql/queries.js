const courtFields = `
    _id
    name
    description

`;

const courtsMain = `
    query courtsMain {
        courtsMain {
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
  courtsMain,
  courtDetail
};
