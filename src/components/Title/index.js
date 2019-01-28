import React from "react";
import "./style.css";

function Title(props) {
  return (<nav className="navbar navbar-dark bg-primary">
      <h1 className="navbar-brand">Clicky Game</h1>
      <h6 className="navbar-nav">Click on a character to increase your score, but not twice!</h6>
      <h4 className="navbar-nav">{props.children}</h4>
    </nav>);
}

export default Title;
