import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {
  let clock = (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(clock, document.getElementById('root'));
}

setInterval(tick, 1000);
