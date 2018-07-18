import React from "react";
import ReactDOM from "react-dom";

class HelloUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Basketball_Jones"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(taco) {
    this.setState({
      username: taco.target.value
    });
  }
  render() {
    return (
      <div>
        Hello {this.state.username}
        <br />
        ChangeName:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        {this.props.name} is a member too!
      </div>
    );
  }
}

export default HelloUser;
