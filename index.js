// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
};

function distanceTravelledInFeet(start, end) {
  return (Math.abs(start - end) * 264);
};

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function calculatesFarePrice(start, end) {
  let feet = distanceTravelledInFeet(start, end);
  if (feet > 2500) {
    return `cannot travel that far`;
  } else if (feet > 2000) {
    return 25;
  } else if (feet > 400) {
    return parseFloat(((feet * 0.02) - 8).toFixed(2));
  } else {
    return 0;
  }
}
