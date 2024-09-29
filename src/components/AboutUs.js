import React, {useState, useEffect, useContext} from 'react'
import UserInfoComponent from './UserInfo'
import UserInfoClassComponent from './UserInfoClass'
import { GITHUB_USER_INFO } from "../utils/constants";
import UserContext from '../utils/UserContext';


const AboutUs = () => {
  const [name, setDefaultName] = useState("Default User")
  const {setName} = useContext(UserContext)
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const userData = await fetch(GITHUB_USER_INFO)
    const userJson = await userData.json()
    setDefaultName(userJson.name)
    setName(userJson.name)
  }
  return (
    <div>
    <h1>AboutUs</h1>
    <UserInfoComponent name = {name}/>
    <UserInfoClassComponent />
    </div>
  )
}

export default AboutUs