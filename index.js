// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]];
}


const returnLastTwoDrivers = function(drivers){
    let length = drivers.length;
    return [drivers[length-2], drivers[length-1]];
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num;
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers(driverArray, driverFunction) {
    if(driverFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(driverArray);
    } else if(driverFunction === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(driverArray);
    }
}
