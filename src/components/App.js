import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, // initially button only
      posi: 0, // numeric position value
      ballPosition: { left: "0px" } // inline style for CSS positioning
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // 🟢 Triggered when "Start" button is clicked
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // 🟡 Function to render either the button or the ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // 🔵 Handle key press (move ball right when ArrowRight is pressed)
  handleKeyDown(event) {
    if (event.keyCode === 39) {
      // 39 = ArrowRight
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: `${newPos}px` }
        };
      });
    }
  }

  // 🧠 Add event listener once component mounts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  // 🧹 Cleanup when component unmounts (optional but good practice)
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
