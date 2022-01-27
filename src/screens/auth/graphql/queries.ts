const currentUser = `
  query currentUser {
    currentUser {
      _id
      username
      email
    }
  }
`;

export default { currentUser };
