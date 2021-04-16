const paramsDef = `
    $username: String
    $firstName: String
    $lastName: String

    $email: String
    $phone: String

    $password: String
`;

const paramsVal = `
    username: $username
    firstName: $firstName
    lastName: $lastName
    
    email: $email
    phone: $phone

    password: $password
`;

const userFields = `
    username
    firstName
    lastName

    email
    phone
    
`;

const createUser = `
    mutation userCreate(${paramsDef}){
        userCreate(${paramsVal}){
            ${userFields}
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

export default { login, createUser };
