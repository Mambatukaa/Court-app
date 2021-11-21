const signUp = `
    mutation usersCreate($email: String! $username: String! $password: String!){
        usersCreate(email: $email username: $username password: $password){
            _id
        }
    }
`;

const login = `
    mutation login($email: String! $password: String!){
        login(email: $email password: $password){
            token
            refreshToken
        }
    }
`;

export default { login, signUp };
