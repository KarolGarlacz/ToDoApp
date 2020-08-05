import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
  };

  render() {
    return (
      <div className='form'>
        <input
          type='text'
          placeholder='dodaj zadanie'
          value={this.state.text}
        />
        <input type='checkbox' checked={this.state.checked} id='important' />
        <label htmlFor='imporant'>Priorytet</label>
        <label htmlFor='date'>Do kiedy zrobić</label>
        <input
          type='date'
          value='2019-01-25'
          min='2020-08/05'
          max='2021-12-31'
        />
        <button>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
