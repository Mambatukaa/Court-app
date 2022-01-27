const signUp = `
    mutation usersCreate($email: String! $username: String! $password: String!){
        usersCreate(email: $email username: $username password: $password){
            _id
        }
    }
`;

const login = `
    mutation login($input: String! $password: String!){
        login(input: $input password: $password){
            token
            refreshToken
        }
    }
`;

export default { login, signUp };
