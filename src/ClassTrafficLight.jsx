import { Component } from "react";

export class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightColor: "red",
    };
  }

  changeLightColor = () => {
    const colors = ["red", "black", "yellow", "green"];
    this.setState((prevState) => {
      const currentIndex = colors.indexOf(prevState.lightColor);
      return {
        lightColor: colors[(currentIndex + 1) % colors.length],
      };
    });
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <button
            className={`circle green ${this.state.lightColor}`}
            onClick={this.changeLightColor}
          ></button>

          <button
            className={`circle black ${this.state.lightColor}`}
            onClick={this.changeLightColor}
          ></button>

          <button
            className={`circle red ${this.state.lightColor}`}
            onClick={this.changeLightColor}
          ></button>
        </div>

        <button className="next-state-button" onClick={this.changeLightColor}>
          {" "}
          Next State{" "}
        </button>
      </div>
    );
  }
}

// - [] The state of a traffic light should go in the following order and repeat indefinitely
//   - Red, Green, Yellow
//   - If the color is red, and you click `nextState`, the light should change to green
//   - If the color is green, and you click `nextState`, the light should change to yellow
//   - If the color is yellow, and you click `nextState`, the light should change to red
// - [] The correct circle should correspond with the correct position
//   - red light should be the top light
//   - yellow light should be the middle light
//   - green light should be the bottom light
// - [] Next State button should go to the next state on the functional traffic light
// - [] Next State button should go to the next state on the class based traffic light


