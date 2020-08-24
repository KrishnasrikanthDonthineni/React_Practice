import React from 'react';
import "./User.css";

const user = (props) => {
    return(
        <div className = "User" >
           
            <p onClick = {props.click}>{props.name} is {props.age} years old</p>

            <input type = "text" onChange = { props.change} />
        </div>
        
    )
}

export default user; 