
import { createContext, useState, useContext, Children } from "react"

function userContext(){
const UserContext = createContext()

useUser () => useContext(UserContext)
const [username,setUsername]= useState('')

console.log(useUser)
// if(!useUser){
//   throw new Error('No user context used')
// }
//   else{
//     return useUser
//   }

  
  return(
    <useUser.Provider value={{username,setUsername}}>
      {Children}
    </useUser.Provider>
  )

}
export default userContext



