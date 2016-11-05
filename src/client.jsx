import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Dog from './dog';

const dogSpeak = new Dog('Snoopy').speak();

// components are js functions that return jsx or what looks like html so when we use it,
//  that's what shows up on the DOM

const App = props => (
  <div>
    {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDOM.render(<App message={dogSpeak} />, document.querySelector('.app'));
