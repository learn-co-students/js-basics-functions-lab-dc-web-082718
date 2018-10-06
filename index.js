// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if(block < 42) {
    return(42 - block)
  } else {
    return((42 - block) * -1)
  }
}

function distanceFromHqInFeet(value) {
  return(distanceFromHqInBlocks(value) * 264);
}

function distanceTravelledInFeet(blockA, blockB) {
  if(blockA < blockB) {
    return((blockB - blockA) * 264);
  } else {
    return((blockA - blockB) * 264);
  }
}

function calculatesFarePrice(start, end) {
  const distanceTravelled = distanceTravelledInFeet(start, end);

  if(distanceTravelled <= 400) {
    return 0;
  } else if(distanceTravelled > 400 && distanceTravelled <= 2000) {
    return 2.56;
  } else if(distanceTravelled > 2000 && distanceTravelled <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
