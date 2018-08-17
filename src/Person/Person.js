import React from "react";

const person = (props) => {
    return (
        <div>
            <p>Hello! I'm {props.name}! {props.age} years old! {props.children}</p>
        </div>
    );
}

export default person