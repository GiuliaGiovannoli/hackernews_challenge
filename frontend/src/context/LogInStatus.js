import { createContext, useState } from 'react';

export const LogInStatusContext = createContext();

export const LogInStatusProvider = (props) => {
  const [logInStatus, setLogInStatus] = useState(false);
  return (
    <LogInStatusContext.Provider value={[logInStatus, setLogInStatus]}>
      {props.children}
    </LogInStatusContext.Provider>
  )
}