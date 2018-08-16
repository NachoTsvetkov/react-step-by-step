import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

let user = {
  firstName: 'Nacho',
  lastName: 'Tsvetkov'
};

function getGreeting() {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }

  return <h1>Hello, Stranger.</h1>;
}

let element = getGreeting();

ReactDOM.render(element, document.getElementById('root'));
