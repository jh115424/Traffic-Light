import { Component } from "react";
const arrColors = ["red", "yellow", "green"];

class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightColor: 0,
      currentLightIndex: 0,
    };
  }

  handleNextState = () => {
    this.setState((prevState) => {
      const currentLightIndex = arrColors.indexOf(prevState.lightColor);
      return {
        lightColor: arrColors[(currentLightIndex + 1) % arrColors.length],
        currentLightIndex: (currentLightIndex + 1) % arrColors.length,
      };
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
