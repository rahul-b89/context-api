//this file is used to pass thr gloval variales defined in 
//UserContext.js to the corresponding wrapped components


import React from "react";
import UserContext from "./UserContext";



const UserContextProvider=({children})=>{    //children refers to the props coming from UserContext.js

const [user,setUser]= React.useState(null)

return(
<UserContext.Provider value={{user, setUser}}>    {/*wahtever value access we want to give can be passed in value  */}
{children}
</UserContext.Provider>
)


}


export default UserContextProvider