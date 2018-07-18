import React from "react";
import ReactDOM from "react-dom";
import AddFriend from "./AddFriend";
import ShowList from "./ShowList";

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "BasketBall_Jones",
      friends: ["Robot_human", "DudeBroCuz", "SirDerpsALot"]
    };

    this.addFriend = this.addFriend.bind(this);
  }
  addFriend(friend) {
    this.setState(state => ({
      friends: state.friends.concat([friend])
    }));
  }
  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}
export default FriendsContainer;
