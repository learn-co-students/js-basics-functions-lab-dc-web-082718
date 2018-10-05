// Code your solution in this file!
function distanceFromHqInBlocks(street){
  if (street > 42){
  return street - 42;
  }
  else {
    return 42 - street;
  }
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  if (startBlock < endBlock){
    return (endBlock - startBlock) * 264;
  }
  else {
  return (startBlock - endBlock) * 264;
  }
}

function calculatesFarePrice(startBlock, endBlock){
  const dist = distanceTravelledInFeet(startBlock, endBlock);

  if (dist <= 400) {
    return 0
  } else if (dist > 400 && dist <= 2000) {
    return .02 * (dist - 400)
  } else if (dist > 2000 && dist < 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
