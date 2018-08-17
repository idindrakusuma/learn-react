import React from "react";
import "./Person.css"

const person = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <p onClick={props.click}>Hello! I'm {props.name}! {props.age} years old! {props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        </div>
    );
}

export default person