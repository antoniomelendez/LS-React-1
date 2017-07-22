/*eslint no-unused-vars: "off"*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDom from 'react-dom';
import './index.scss';
import ListItems from './ListItems.js';
import TodoInputField from './TodoInputField.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };
    this.onSave = this.onSave.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onSave(text) {
    this.setState({
      list: [...this.state.list, text]
    });
  };
  onClear() {
    this.setState({
      list: []
    });
  };

  render() {
    return (
      <div>
        <h1 className="heading">Todo List</h1>
        <ListItems list={this.state.list} onDelete={this.onClear}/>
        <TodoInputField onSave={this.onSave} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
