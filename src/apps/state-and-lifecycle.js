import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

function App(props) {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
