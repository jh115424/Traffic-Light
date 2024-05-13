import { Component, useState } from "react";

function FunctionalTrafficLight() {
  const [lightColor, setLightColor] = useState("red");

  const colors = ["red", "yellow", "green"];

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <button className={`circle red ${colors[0]}`}></button>
        <button className={`circle yellow ${colors[1]}`}></button>
        <button className={`circle green ${colors[2]}`}></button>
      </div>
    </div>
  );
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

// export const FunctionalTrafficLight = () => {
//   return (
//     <div className="traffic-light-box">
//       <h2>Functional Traffic Light</h2>
//       <div className="traffic-light">
//         {/* Background color can be black | yellow | red | green */}
//         <div className="circle black"></div>
//         <div className="circle yellow"></div>
//         <div className="circle green"></div>
//       </div>
//       <button className="next-state-button">Next State</button>
//     </div>
//   );
// };
