import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

let user = {
  firstName: 'Nacho',
  lastName: 'Tsvetkov'
};

// user = null;

function getGreeting() {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }

  return <h1>Hello, Stranger.</h1>;
}

let element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
element = getGreeting();

ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
// registerServiceWorker();
