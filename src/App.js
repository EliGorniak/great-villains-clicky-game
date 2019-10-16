import React, { Component } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Containner from "./components/Containner";
import cardsJSON from "./cards.json";
//import { stat } from "fs";

class App extends Component {
  state = {
    villains: cardsJSON,
    score: 0,
    highScore: 0
  };

  // Function to select the villain data:
  selectImage = id => {
    let currentVillains = this.state.villains;
    let currentScore = this.state.score;
    let clickedVillain;
    // Statement for clear the display message:
    if (this.state.score === 0) {
      this.setState({
        display: ""
      });
    }
    currentVillains.forEach(function(item) {
      if (item.id === id) {
        clickedVillain = item;
      }
    });

    // Statement to check if the villain was clicked:
    if (!clickedVillain.clicked) {
      clickedVillain.clicked = true;
      currentScore++;

      // Statement to compare score with array size:
      if (currentScore === this.state.villains.length) {
        this.doVictory();
      } else {
        this.setState({
          villains: currentVillains,
          score: currentScore
        });
        this.state.villains.sort(() => Math.random() - 0.5);
      }
    } else {
      // If the villain has been clicked twice, end the game:
      this.doEndGame();
    }
  };

  // Function for end game and keep the highscore:
  doEndGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState(
        {
          highScore: this.state.score,
          display: "Oh no, you loose! Try again!"
        },
        function() {
          console.log(this.state);
        }
      );
    }
    this.state.villains.forEach(item => {
      item.clicked = false;
    });
    this.setState({
      score: 0
    });
  };

  // Function for initialize variables to restart the game:
  doVictory = () => {
    this.state.villains.forEach(item => {
      item.clicked = false;
    });
    this.setState({
      score: 0,
      highScore: this.state.villains.length,
      display: "Amazing! Wanna play again?"
    });
  };

  // Update the content in HTML page:
  render() {
    return (
      <Containner>
        <Header
          score={this.state.score}
          highscore={this.state.highScore}
          display={this.state.display}
        />
        {this.state.villains.map(villain => (
          <Card
            selectImage={this.selectImage}
            id={villain.id}
            key={villain.id}
            name={villain.name}
            image={villain.image}
            clicked={villain.clicked}
          />
        ))}
        <Footer />
      </Containner>
    );
  }
}

export default App;
