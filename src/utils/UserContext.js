import {createContext} from 'react'

const UserContext = createContext({
    userName: "Default User",
    setName: (userName =  "Default User")=>{}
})

export default UserContext;