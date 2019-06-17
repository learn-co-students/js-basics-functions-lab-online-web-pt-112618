function distanceFromHqInBlocks(blockNum) {
  if (blockNum > 42) {
    return blockNum - 42;
  } else {
    return 42 - blockNum;
  }
}

function distanceFromHqInFeet(blockNum) {
  const blockLength = 264;
  return distanceFromHqInBlocks(blockNum) * blockLength;
}

function distanceTravelledInFeet(start, end) {
  const blockLength = 264;
  if (start > end){
    return (start - end) * blockLength;
  } else {
    return (end - start) * blockLength;
  }
}

function calculatesFarePrice(start, end) {
  let distance = distanceTravelledInFeet(start, end);
  let fare = (distance - 400) * 0.02;
  if (distance < 400) {
    return 0;
  } else if (distance >= 400 && distance <= 2000) {
    return fare;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
