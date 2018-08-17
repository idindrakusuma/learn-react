import React from "react";

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>Hello! I'm {props.name}! {props.age} years old! {props.children}</p>
        </div>
    );
}

export default person