import { useState } from "react";
import React from "react";

const User=(props)=>{
    const {name} = props
    const [count] = useState(0)
    const [count2] = useState(2)
    return(
        <div className="User_card">
            <h1>count :{count}</h1>
            <h1>count2 :{count2}</h1>
            <h1>Name : {name} </h1>
            <h2>Location : Bengaluru</h2>
            <h4>designation : Sr.Devloper</h4>
        </div>
    )
}

export default User;