import React from "react";
import ReactDOM from "react-dom";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: ""
    };
    this.updateNewFriend = this.updateNewFriend.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
  }
  updateNewFriend(taco) {
    this.setState({
      newFriend: taco.target.value
    });
  }
  handleAddNew() {
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ""
    });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newFriend}
          onChange={this.updateNewFriend}
        />
        <button onClick={this.handleAddNew}> Add Homie </button>
      </div>
    );
  }
}
// AddFriend.propTypes:
// {
//   addNew: PropTypes.func.isRequired;
// }

export default AddFriend;
