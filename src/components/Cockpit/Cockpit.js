import React from 'react';

import classCockpit from './Cockpit.css';

const cockpit = ( props ) => {
  /* dynamic class */
  let buttonClass = classCockpit.green;
  if (props.showPerson) {
    buttonClass = classCockpit.red;
  }

  return (
    <div className={classCockpit.Cockpit}>
      <div className="card mt-4">
        <h5 className="card-header">Awesome React!</h5>
        <div className="card-body">
          <div>
              <button 
                onClick={() => props.changeStateHandler('Santriwati')} 
                className={buttonClass}> Change State </button>
              <button 
                onClick={props.showHidePerson} 
                className={buttonClass}> Show/Hide </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cockpit;