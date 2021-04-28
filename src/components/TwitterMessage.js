import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }

  }

  handleMaxChars = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let count = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMaxChars} value={this.state.message}/>
        {count}
      </div>
    );
  }
}

export default TwitterMessage;
