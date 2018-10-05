// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  let distance;
  const origin = 42;
  if (location < 42) {
    distance = ((location - origin)* -1)
    return distance
  }
  else {
    distance = location - origin
    return distance
  }
}

function distanceFromHqInFeet(location) {
  const blockDistance = 264
  let distance = distanceFromHqInBlocks(location)
  return distance * blockDistance
}

function distanceTravelledInFeet(start, end) {
  const distanceInBlocks = (end - start)
  const distance = distanceInBlocks * 264
  if (distance < 1) {
    return distance * -1
  }
  else
  return distance
}

function calculatesFarePrice(start, end) {

  let cost;
  const distance = distanceTravelledInFeet(start, end)

  if (distance < 400){
    cost = 0
    return cost
  }
  else if (distance > 0 && distance < 2000){
    cost = ((distance - 400) * 0.02)
    return cost
  }

  else if (distance > 2000 && distance < 2500) {
    cost = 25
    return cost
  }
  else if (distance > 2500) {
    cost = 'cannot travel that far'
    return cost
  }
}


// somestuiff
