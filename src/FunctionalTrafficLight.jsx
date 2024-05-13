

import React, { useState } from "react";

const FunctionalTrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");

  const handleNextState = () => {
    if (currentLight === "red") {
      setCurrentLight("green");
    } else if (currentLight === "green") {
      setCurrentLight("yellow");
    } else {
      setCurrentLight("red");
    }
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className={`circle ${currentLight === "red" ? "red" : "black"}`}
        ></div>
        <div
          className={`circle ${currentLight === "yellow" ? "yellow" : "black"}`}
        ></div>
        <div
          className={`circle ${currentLight === "green" ? "green" : "black"}`}
        ></div>
      </div>
      <button className="next-state-button" onClick={handleNextState}>
        Next State
      </button>
    </div>
  );
};

export default FunctionalTrafficLight;


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
