import React, {Component} from "react";
// import Radium from 'radium';
import classPerson from "./Person.css"

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside contructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidUpdate()')
  }
  render () {
    console.log('[Person.js] inside in render()');
    return (
      <div className="mt-1 mb-1">
          <div className="card">
              <div className="card-header">
                  <p onClick={this.props.click}>Hello! I'm {this.props.name}! {this.props.age} years old! {this.props.children}</p>
              </div>
              <div className="card-body">
                <div className={classPerson.person}>
                  <input 
                      type="text" placeholder="Input your own name.."
                      className="form-control"
                      onChange={this.props.changed}
                      value={this.props.name} />
                </div>
              </div>
              <div className="card-footer">
                  <button 
                    className="btn btn-danger btn-sm float-right" 
                    onClick={this.props.delete}>Delete</button>
              </div>
          </div>
      </div>
    );
  }
}

// export default Radium(person);
export default Person;