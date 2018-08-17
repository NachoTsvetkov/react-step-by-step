import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Fragment(props) {
  return <div>{props.children}</div>;
}

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Fragments should also have a `key` prop when mapping collections
        <ListItem key={item.id} item={item} />
      ))}
    </dl>
  );
}

let items = [
  { id: 1, term: 'Caffe', description: 'Good' },
  { id: 2, term: 'Tea', description: 'Good' },
  { id: 3, term: 'Water', description: 'Good' },
  { id: 4, term: 'Vitamins', description: 'Good' }
];

ReactDOM.render(<Glossary items={items} />, document.getElementById('root'));
