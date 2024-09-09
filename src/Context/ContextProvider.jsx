import { CreateContext } from "../Context/CreateContext";
 import { useState } from "react";

export const ContextProvider=(props)=>{

   
     const [User, setUser ]=useState({})
     User?console.log(User):console.log("not stored")
    

return ( 
    <>
    <CreateContext.Provider value={{User,setUser}}>
       {props.children}
    </CreateContext.Provider> 
    </>
   
    )
}

    // _id
    // password
    // email
    // profilePicture
    // coverPicture
    // followers
    // followings
    // isAdmin
    // desc
    // from


