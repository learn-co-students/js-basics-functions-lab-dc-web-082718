// Code your solution in this file!
function distanceFromHqInBlocks(block){
  const hqBlock = 42;
    if (block <= hqBlock){
      return hqBlock - block
    }
    else {
      return block - hqBlock
    }

}

function distanceFromHqInFeet(block){
  const numberOfBlocks = distanceFromHqInBlocks(block)
  return numberOfBlocks * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  if (startBlock <= endBlock){
    return (endBlock-startBlock)*264
  }
  else{
    return (startBlock-endBlock)*264
  }
}

function calculatesFarePrice(startBlock, endBlock){
  const distanceTravelled = distanceTravelledInFeet(startBlock,endBlock)

  if (distanceTravelled <= 400){
    return 0;
  }
  else if (distanceTravelled > 400 && distanceTravelled < 2000){
    return (distanceTravelled-400)*.02
  }
  else if (distanceTravelled < 2500 && distanceTravelled >= 2000) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
