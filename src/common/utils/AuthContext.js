import { createContext, useContext } from 'react';

export const AuthContext = createContext();

function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}
export default useAuth;
