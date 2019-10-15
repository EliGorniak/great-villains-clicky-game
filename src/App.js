import React, { Component } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Containner from "./components/Containner";
import cardsJSON from "./cards.json";

class App extends Component {
  state = {
    friends: cardsJSON,
    score: 0,
    highScore: 0,
    display: "To start the game, click on an image!"
  };

  endGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState(
        {
          highScore: this.state.score
        },
        function() {
          console.log(this.state);
        }
      );
    }
    this.state.friends.forEach(item => {
      item.clicked = false;
    });
    this.setState({
      score: 0,
      display: "Oh no, same image twice! Try again!"
    });
  };

  win = () => {
    this.state.friends.forEach(item => {
      item.clicked = false;
    });
    this.setState({
      score: 0,
      highScore: 12,
      display: "You win! Great job!"
    });
  };

  selectImage = id => {
    let currentFriends = this.state.friends;
    let currentScore = this.state.score;

    let clicked;
    for (let i = 0; i < currentFriends.length; i++) {
      if (currentFriends[i].id === id) {
        clicked = currentFriends[i];
      }
    }

    //if the image hasn't been clicked yet
    if (clicked.clicked === false) {
      //set the image to clicked
      clicked.clicked = true;

      //increment the score
      currentScore++;

      //if the score is 12
      if (currentScore === 12) {
        this.win();
      } else {
        //set the state
        this.setState({
          friends: currentFriends,
          score: currentScore,
          display: "Keep going!"
        });
        console.log(this.state);

        this.state.friends.sort(() => Math.random() - 0.5);
      }
    } else {
      // if the image has been clicked
      this.endGame();
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Containner>
        <Header
          score={this.state.score}
          highscore={this.state.highScore}
          display={this.state.display}
        />
        {this.state.friends.map(friend => (
          <Card
            selectImage={this.selectImage}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
        <Footer />
      </Containner>
    );
  }
}

export default App;
