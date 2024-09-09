import { CreateContext } from "../Context/CreateContext";
 import { useState } from "react";

export const ContextProvider=(props)=>{

   
     const [User, setUser ]=useState({})
   
    

return ( 
    <>
    <CreateContext.Provider value={{User,setUser}}>
       {props.children}
    </CreateContext.Provider> 
    </>
   
    )
}

 


