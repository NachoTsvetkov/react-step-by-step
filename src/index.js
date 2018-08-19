import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();

ReactDOM.render(
  <FancyButton ref={ref}>Click me!</FancyButton>,
  document.getElementById('root')
);
