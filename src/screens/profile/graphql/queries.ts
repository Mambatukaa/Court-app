const currentUser = `
    query currentUser {
        currentUser {
            _id
            username
            email
            role
        }
    }
`;

export default { currentUser };
