// import React, {useState} from "react";
// import UserContext from "./UserContext";


// const UserContextProvider = ({children})=>{
//   const [user, setUser] = useState(null)
//   return(
//   <UserContext.Provider value={{user, setUser}}>
//   {children}
//   </UserContext.Provider>
//   )
// }
// export default UserContextProvider
import  { useState } from "react";
import PropTypes from "prop-types";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Add prop type validation for children
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is a valid React node and required
};

export default UserContextProvider;
