// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return Math.abs(location - 42) * 264;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, destination) {
  let distanceTravelled = Math.abs(destination - start) * 264;
  if (distanceTravelled <= 400) {
    return 0;
  }
    else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      return (distanceTravelled - 400) * 0.02
    }
      else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25
      }
        else
          return "cannot travel that far"
  }
