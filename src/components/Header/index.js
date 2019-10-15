import React from "react";
import "./style.css";

let style = {
  width: "80%",
  textAlign: "center",
  color: "#black",
  marginBottom: "50px",
  padding: "2rem"
};

function Header(props) {
  return (
    <div className="jumbotron-fluid" style={style}>
      <h2 className="display-4">Great Villains Clicky Game</h2>
      <h4>
        Click on different images to earn points! <br /> But if you click on the
        same image twice, you'll loose your points and the game will restart!!
      </h4>
      <span>{props.display}</span>
      <hr></hr>
      <span className="score">
        Score: {props.score} <br />
        High Score: {props.highscore}
      </span>
    </div>
  );
}
export default Header;
