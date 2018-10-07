// Code your solution in this file!
function distanceFromHqInBlocks(number)
{
  if (number > 42)
  {
    return (number - 42);
  }
  else if (number < 42)
  {
    return (42 - number);
  }
}

function distanceFromHqInFeet(number)
{
  if (number > 42)
  {
    return ((number - 42) * 264);
  }
  else if (number < 42)
  {
    return ((42 - number) * 264);
  }
}

function distanceTravelledInFeet(numberOne, numberTwo)
{
  return Math.abs((numberOne - numberTwo) * 264)
}

function calculatesFarePrice(numberOne, numberTwo)
{
  let distance = Math.abs((numberOne - numberTwo) * 264)

  if (distance < 400)
  {
    return 0;
  }
  else if ((distance > 400) && (distance <   2000))
  {
    return ((distance - 400) * .02);
  }
  else if (distance > 2500)
  {
    return 'cannot travel that far';
  }
  else if (distance > 2000)
  {
    return 25;
  }
}
