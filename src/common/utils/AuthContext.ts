import { createContext, useContext } from 'react';
import { IAuth } from '../types';

export const AuthContext = createContext<IAuth>({
  signOut: () => console.log(''),
  signIn: (data: any) => console.log('')
});

function useAuth() {
  const auth = useContext(AuthContext);

  return auth;
}
export default useAuth;
