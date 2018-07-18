// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import HelloWorld from "./HelloWorld";
// import HelloUser from "./HelloUser";
// import FriendsContainer from "./FriendsContainer";

// ReactDOM.render(<HelloWorld />, document.getElementById("root"));
// ReactDOM.render(<HelloUser />, document.getElementById("root"));
// ReactDOM.render(
//   <HelloUser name="TacoLover87" />,
//   document.getElementById("root")
// );
// ReactDOM.render(<FriendsContainer />, document.getElementById("root"));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Basketball_Jones"
    };
  }
  componentDidMount() {
    // Invoked once the component is mounted to the DOM
    // Good for making AJAX requests
  }
  static getDerivedStteFromProps(nextProps, prevState) {
    // The object you return from this function will
    // be merged with the current state.
  }
  componentWillUnmount() {
    // Called IMMEDIATELY before a component is unmounted
    // Good for cleaning up listeners
  }
  render() {
    return <div>Hello, {this.state.name}</div>;
  }
}
