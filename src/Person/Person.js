import React from "react";
import "./Person.css"

const person = (props) => {
    return (
        <div className="mt-1 mb-1">
            <div className="card">
								<div className="card-header">
                    <p onClick={props.click}>Hello! I'm {props.name}! {props.age} years old! {props.children}</p>
								</div>
                <div className="card-body">
										<input type="text" placeholder="Input your own name.."
											className="form-control" 
											onChange={props.changed}
											value={props.name} />
                </div>
								<div className="card-footer">
                    <button className="btn btn-danger btn-sm float-right" onClick={props.delete}>Delete</button>
								</div>
            </div>
        </div>
    );
}

export default person