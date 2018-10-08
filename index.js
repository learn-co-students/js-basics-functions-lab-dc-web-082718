// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  if (value > 42) {
    return value - 42;
  } else {
    return 42 - value;
  }
}


function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(value1, value2){
    if (value1 < value2) {
      return (value2 - value1) * 264;
    } else {
      return (value1 - value2) * 264;
    }
}

function calculatesFarePrice(value1, value2) {
  if (distanceTravelledInFeet(value1, value2) <= 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(value1, value2) > 401 && distanceTravelledInFeet(value1, value2) <= 2000){
    return (distanceTravelledInFeet(value1, value2) - 400) * .02;
  }
  else if (distanceTravelledInFeet(value1, value2) > 2000 && distanceTravelledInFeet(value1, value2) <= 2500){
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
