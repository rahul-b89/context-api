// The Context API is a feature in React that allows you to share 
//data across the component tree without having to pass props manually 
//at every level. It's particularly useful for providing global data, 
//such as themes, user authentication, language preference, etc., to many components in an application.



import React from "react";

const UserContext = React.createContext();

export default UserContext;