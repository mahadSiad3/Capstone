
import { createContext, useState, useContext } from "react"

const UserContext = createContext()

export const useUser = () => useContext(UserContext)



