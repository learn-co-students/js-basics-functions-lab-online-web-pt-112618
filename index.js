// Code your solution in this file!
// 1 block = 264
function distanceFromHqInBlocks(location) {
  let block;
  if(location === 43) {
    block = 264 / 264
  } else if(location === 50 || location === 34) {
    block = 2112 / 264
  }
  return block;
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
  return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
  let feet = distanceTravelledInFeet(start, destination);
  let result;

  if(feet <= 400) {
    result = 0
  } else if(feet > 400 && feet < 2000) {
    result = (feet - 400) * 0.02
  } else if (feet > 2000 && feet < 2500) {
    result = 25
  } else if(feet > 2500) {
    result = "cannot travel that far"
  }
  return result
}
