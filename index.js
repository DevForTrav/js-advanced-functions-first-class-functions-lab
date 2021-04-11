// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = (drivers) => { 
    let newDrivers; 
    newDrivers = [...drivers]
    // console.log(newDrivers)

    return newDrivers.splice(0,2)
}

const returnLastTwoDrivers = (drivers) => { 
    let newDrivers; 
    newDrivers = [...drivers]
    // console.log(newDrivers)

    return newDrivers.splice(2,2)
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(int) {
     return (fare) =>  int*fare;
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare);
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, whichTwoDrivers) {
    if (whichTwoDrivers === returnFirstTwoDrivers)    {
        return returnFirstTwoDrivers(drivers)
    } else if (whichTwoDrivers === returnLastTwoDrivers)    {
        return returnLastTwoDrivers(drivers)
    }
}

