import COURTS from '../../data/dummy-data';

const initialState = {
  availableCourts: COURTS,
  userCourts: COURTS.filter(prod => prod.ownerId === 'u1')
};

export default (state = initialState, action) => {
  return state;
};
