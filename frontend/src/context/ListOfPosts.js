import { createContext, useState } from 'react';

export const ListOfPostsContext = createContext();

export const ListOfPostsProvider = (props) => {
  const [listOfPosts, setListOfPosts] = useState();
  return (
    <ListOfPostsContext.Provider value={[listOfPosts, setListOfPosts]}>
      {props.children}
    </ListOfPostsContext.Provider>
  )
}