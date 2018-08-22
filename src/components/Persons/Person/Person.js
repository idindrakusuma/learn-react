import React, {Component} from "react";
import propTypes from 'prop-types';
import classPerson from "./Person.css"
/* import aux component */
import Aux from "../../../hoc/aux";
import withClass from "../../../hoc/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside contructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] inside componentDidUpdate()')
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }
  render () {
    console.log('[Person.js] inside in render()');
    return (
      <Aux>
              <div className="card-header">
                  <p onClick={this.props.click}>Hello! I'm {this.props.name}! {this.props.age} years old! {this.props.children}</p>
              </div>
              <div className="card-body">
                <div className={classPerson.person}>
                  <input
                      ref={this.inputElement}
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
      </Aux>
    );
  }
}

Person.propTypes = {
  age: propTypes.number,
  name: propTypes.string,
  delete: propTypes.func
};

Person.defaultProps = {
  name: 'noname'
}

// export default Radium(person);
export default withClass(Person, 'card mb-1 mt-1');