import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ""
    }

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    debugger
    this.setState({ inputVal: e.currentTarget.value })
  }

  render() {
    return(
      <div className='autocomplete-widget-container'>
        <h3>Autocomplete</h3>
        <input
          onChange={ this.handleUpdate }
          placeholder='Search names...'
          value={ this.state.inputVal }></input>
      </div>
    )
  }
}

export default Autocomplete;
