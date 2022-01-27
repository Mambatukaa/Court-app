import React, { createContext } from 'react';
import { IUser } from './screens/auth/types';

// tslint:disable-next-line: variable-name
const AppContext = createContext({});

// tslint:disable-next-line: variable-name
export const AppConsumer = AppContext.Consumer;

interface IProps {
  currentUser: IUser;
  children: JSX.Element;
}

export function AppProvider(props: IProps) {
  return (
    <AppContext.Provider value={{ currentUser: props.currentUser }}>
      {props.children}
    </AppContext.Provider>
  );
}
