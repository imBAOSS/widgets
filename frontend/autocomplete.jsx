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
      <div>
        <input onChange={ this.handleUpdate }></input>
      </div>
    )
  }
}

export default Autocomplete;
