import React, { useState } from "react";

const arrColors = ["red", "yellow", "green"];

const FunctionalTrafficLight = () => {
  const [currentLightIndex, setCurrentLightIndex] = useState(0);

  const handleNextState = () => {
    const newColorIndex =
      currentLightIndex === 0 ? arrColors.length - 1 : currentLightIndex - 1;
    setCurrentLightIndex(newColorIndex);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {arrColors.map((light) => {
          return (
            <div
              className={`circle ${
                currentLightIndex === arrColors.indexOf(light) ? light : "black"
              }`}
              key={light}
            ></div>
          );
        })}
      </div>
      <button className="next-state-button" onClick={handleNextState}>
        Next State
      </button>
    </div>
  );
};

export default FunctionalTrafficLight;
