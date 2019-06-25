// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if (block > 42) {
        return block - 42
    } else {
        return 42- block
    }
}

function distanceFromHqInFeet(block){
    if (block > 42) {
        return (block - 42) * 264
    } else {
        return (42- block) * 264
    }
}

function distanceTravelledInFeet(beginning, destination){
    if (beginning > destination) {
        return (beginning - destination) * 264
    } else {
        return (destination - beginning) * 264
    }
}

function calculatesFarePrice(start, destination){
    let distance
    let farePrice
    
    if (start > destination) {
        distance = (start - destination) * 264
    } else {
        distance = (destination - start) * 264
    }

    if (distance <= 400){
        farePrice = 0
        return farePrice
    } else if (distance > 400 && distance <=2000){
        farePrice = (distance - 400) * .02
        return farePrice
    } else if (distance > 2000 && distance <= 2500){
        farePrice = 25
        return farePrice
    } else {
        return 'cannot travel that far'
    }
}