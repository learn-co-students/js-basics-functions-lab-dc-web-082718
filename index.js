// Code your solution in this file!
function distanceFromHqInBlocks(block){
  const HQ = 42;

  if (block <= HQ){
    return HQ- block
  }

  else {
    return block - HQ
  };
};


function distanceFromHqInFeet(block){
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(starting, destination){
    return Math.abs(destination - starting) * 264
}

function calculatesFarePrice(start, destination){
  let distanceInFeet = distanceTravelledInFeet(start, destination)

  if (distanceInFeet < 400){
    return 0
  }
  else if (distanceInFeet > 400 && distanceInFeet <= 2000){
    return (distanceInFeet - 400) * 0.02
  }
  else if (distanceInFeet > 2000 && distanceInFeet < 2500){
    return 25
  }
  else { return "cannot travel that far" };
};
