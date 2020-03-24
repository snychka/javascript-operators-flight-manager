function Passengers() {
/*
In passengers.js, write a checkFlightCapacity() function that gets as parameters the flight capacity and and array of passengers numbers. Calculate the total number of passengers by adding each number of passengers from the array. If the total number of passengers is less that the capacity of the flight, return it. If there are more passengers than the flight capacity, you should throw an error.

Export the checkFlightCapacity() function and the Passengers module itself.

Check to see that the functionality "Check the flight capacity" from the front end is running fine./*

    function checkFlightCapacity(fc, pn) {
        let sum = pn.reduce((s, c) => s+c, 0);
        if (sum < fc) {
            return sum;
        } else {
            throw Error("Too many passengers");
        }
    }

    return {checkFlightCapacity};

}

module.exports = Passengers();

