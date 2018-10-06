// Code your solution in this file!
function distanceFromHqInBlocks (block) {
  if (block > 42) {
    return block - 42;
  }
  else {
    return 42 - block;
  }
}

function distanceFromHqInFeet (block) {
  blockNum = distanceFromHqInBlocks(block);
  return (blockNum * 264);
}

function distanceTravelledInFeet (block1, block2) {
  if (block1 > block2) {
    return (block1 - block2)*264;
  }
  else {
    return (block2 - block1)*264;
  }
}

// function calculatesFarePrice (block1, block2) {
//   const feet = distanceFromHqInFeet(block1, block2);
//   if (feet <= 400) {
//     return 0;
//   }
//   else if (feet > 400 && feet <= 2000) {
//     return .02 * (distance - 400);
//   }
//   else if (feet > 2000 && feet < 2500) {
//     return 25;
//   }
//   else {
//     return 'cannot travel that far';
//   }
// }


function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
