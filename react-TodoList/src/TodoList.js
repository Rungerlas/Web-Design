import React from 'react';
import Displaylist from './List';

export default class Todo extends React.Component {
  state = {
    inputValue: 'Enter words',
    inputList: [],
  };

  handleChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  };

  cleanUp = () => {
    this.setState({ inputValue: '' });
  };

  storeInput = () => {
    const newlist = {
      id: new Date().valueOf(),
      title: this.state.inputValue,
      check: false,
    };
    const newres = [...this.state.inputList, newlist];
    this.setState({ inputList: newres, inputValue: '' });
  };

  checkChange = (id) => {
    const newlist = this.state.inputList.map((input) => {
      if (input.id === id) {
        return {
          ...input,
          check: !input.check,
        };
      } else {
        return input;
      }
    });
    this.setState({ inputList: newlist });
  };

  renderList = () => {
    const res = this.state.inputList.map((input) => {
      return (
        <li key={input.id} style={{ display: 'flex' }}>
          <input
            type="checkbox"
            checked={input.check}
            onChange={() => {
              this.checkChange(input.id);
            }}
          />
          <div>{input.title}</div>
          <button onClick={() => this.removelist(input.id)}>Delete</button>
        </li>
      );
    });
    return res;
  };

  removelist = (id) => {
    const res = this.state.inputList.filter((input) => {
      return input.id !== id;
    });

    this.setState({ inputList: res });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onClick={this.cleanUp}
          onChange={this.handleChange}
        />
        <button onClick={this.storeInput}>Add</button>
        {this.renderList()}
      </div>
    );
  }
}
