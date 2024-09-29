import {useState} from 'react'

const UserInfoComponent = ({name}) => {
  const [count] = useState(1)
  return (
    <div className = "user-info-card">
        <h2>Count: {count}</h2>
        <h2>Name: {name}</h2>
        <h2>Location: Hyderabad</h2>
    </div>
  )
}

export default UserInfoComponent