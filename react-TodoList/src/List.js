import React from 'react';
import Todo from './TodoList';

export default class Displaylist extends React.Component {
  state = {
    checked: false,
  };

  checkChange = () => {
    if (this.state.checked === false) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  };

  render() {
    return (
      <div>
        <ul>
          <li style={{ display: 'flex' }}>
            <input type="checkbox" onClick={this.checkChange} />
            <div>{}</div>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}
