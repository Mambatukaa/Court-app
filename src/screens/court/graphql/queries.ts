const courtFields = `
    _id
    name
    description
    warning
    featuredImage
    secondaryImages
    surface
    format

    courtSchedule {
        _id
        startDate
        endDate
        price
        courtId
        bookedPeople
    }
`;

const courtsMain = `
    query courtsMain($searchValue: String!) {
        courtsMain(searchValue: $searchValue) {
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
