"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.
 */
const trafficLight = {
  state: "green",
  states: ['red', 'orange']
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  const currentStates = trafficLight.states;
  console.log("The traffic light is on", currentState);

  if (currentState === 'green') {
    trafficLight.state = currentStates[1];
  } else if (currentState === 'orange'){
    trafficLight.state = currentStates[0];
  } else if (currentState === 'red') {
    rotations+=1;
    trafficLight.state = 'green';
 }

  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green
}

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/