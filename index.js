// Code your solution in this file!

function distanceFromHqInBlocks(street){

let result

if (street === 43) {
  result = 1
}
if (street > 43){
  result = street - 42
}
else if (street < 43){
  result = 42 - street
}
return result
}


function distanceFromHqInFeet(street){
  distanceFromHqInBlocks(street)
let result

if (street === 43){
  result = 264
}
if (street > 43){

  result = (street - 42) * 264
}
if (street < 43){
  result = (42 - street) * 264
}
return result
}

function distanceTravelledInFeet(value1, value2){

  let result

  if (value2>value1) {
    result = (value2 - value1) * 264
  }
  else if (value1>value2) {
    result = (value1 - value2) * 264
  }
return result
}

function calculatesFarePrice(start,destination){
    distanceTravelledInFeet(start,destination)
  let price

  if (distanceTravelledInFeet(start,destination) <= 400) {
    price = 0
  }
else if (distanceTravelledInFeet(start,destination) <= 2000) {
    price = .02 * (distanceTravelledInFeet(start,destination) - 400)
  }
  else if (distanceTravelledInFeet(start,destination) > 2500){
    price = 'cannot travel that far'
  }
  else if (distanceTravelledInFeet(start,destination) > 2000){
    price = 25
  }

return price
}
