import { Component } from "react";
const arrColors = ["red", "yellow", "green"];

class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLightIndex: 0,
    };
  }

  handleNextState = () => {
    const newColorIndex =
      this.state.currentLightIndex === 0
        ? arrColors.length - 1
        : this.state.currentLightIndex - 1;
    this.setState({
      currentLightIndex: newColorIndex,
    });
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {arrColors.map((light) => {
            return (
              <div
                className={`circle ${
                  this.state.currentLightIndex === arrColors.indexOf(light)
                    ? light
                    : "black"
                }`}
                key={light}
              ></div>
            );
          })}
        </div>

        <button className="next-state-button" onClick={this.handleNextState}>
          {" "}
          Next State{" "}
        </button>
      </div>
    );
  }
}
export default ClassTrafficLight;
