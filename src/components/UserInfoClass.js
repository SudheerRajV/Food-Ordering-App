import React from "react";
import { GITHUB_USER_INFO } from "../utils/constants";
import UserContext from "../utils/UserContext";
class UserInfoClassComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 1,
            userInfo: {
                "name": "Sudheer raj",
                "location": "India"
            }
        }
    }

    async componentDidMount(){
        // const data = await fetch(GITHUB_USER_INFO)
        // const user = await data.json()
        // console.log('user', user)
        // this.setState({
        //     userInfo: user
        // })
    }

    render() {
        //const {name} = this.props
        const {count} = this.state
        const {name, location} = this.state.userInfo
        return (
            <div className = "user-info-card">
                <h2>Count: {count}</h2>
                <button onClick = {
                    () => {
                        this.setState({
                            count: count + 1
                        })
                    }
                }>Increse counter</button>
                <UserContext.Consumer>
                    {({userName})=>{
                        return <h2>Name: {userName}</h2>
                        }}
                </UserContext.Consumer>
                {/* <UserContext.Consumer>
                    {({userName, setName})=>(setName(userName))}
                </UserContext.Consumer> */}
                <h2>Location: {location}</h2>
            </div>
          )
    }
}

export default UserInfoClassComponent