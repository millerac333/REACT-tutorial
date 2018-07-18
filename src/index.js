import React, { Component } from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";
import HelloUser from "./HelloUser";
import FriendsContainer from "./FriendsContainer";

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
ReactDOM.render(<HelloUser />, document.getElementById("root"));
ReactDOM.render(
  <HelloUser name="TacoLover87" />,
  document.getElementById("root")
);
ReactDOM.render(<FriendsContainer />, document.getElementById("root"));
