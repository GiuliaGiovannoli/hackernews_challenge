import { createContext, useState } from 'react';

export const UserInfosContext = createContext();

export const UserInfosProvider = (props) => {
  const [userInfos, setUserInfos] = useState();
  return (
    <UserInfosContext.Provider value={[userInfos, setUserInfos]}>
      {props.children}
    </UserInfosContext.Provider>
  )
}