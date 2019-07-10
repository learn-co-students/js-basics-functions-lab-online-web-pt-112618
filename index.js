// Code your solution in this file!
function distanceFromHqInBlocks(block1, block2=42){
  const result = block1 > block2 ? block1-block2 : block2-block1
  return result
}

function distanceFromHqInFeet(block1, block2){
  return distanceFromHqInBlocks(block1, block2)*264
}

function distanceTravelledInFeet(block1, block2){
  return distanceFromHqInBlocks(block1, block2)*264
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start,destination)
  if (distance<400){
    return distance*0
  } else if (distance>400 && distance <2000) {
    return (distance*2-800)/100
  } else if (distance>2000 && distance <2500) {
    return 25
  } else {
    return "cannot travel that far"
  }
}
