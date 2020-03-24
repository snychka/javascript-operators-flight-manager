

function Flights() {

    //function calculateNumberOfFlights (p, fc) {
    let calculateNumberOfFlights = (p, fc) => {

        if (!Number.isInteger(p) || p < 0) {
            throw new Error("The number of passengers must be a positive integer value");
        }
        if (!Number.isInteger(fc) || fc < 0) {
            throw new Error("The capacity of the flight must be a positive integer value");
        }

        let flights = p % fc === 0 ?
            Math.floor(p/fc) : 
            Math.floor(p/fc) + 1;
        return flights;
    }

    // a bit redundant, namely else if, but should work
    function checkAircraftRevision (dl, da) {
        let sum = da.reduce((s, c) => s+c, 0);
        if (sum < dl/2) {
            //return "3 months";
            return "The revision needs to be done within the next 3 months";
        } else if (sum >= dl/2 && sum < 0.75*dl) {
            //return "2 months";
            return "The revision needs to be done within the next 2 months";
        } else if (sum >= 0.75*dl && sum <= dl) {
            //return "1 month";
            //return "The revision needs to be done within the next 1 month";
            return "The revision needs to be done within the next month";
        } else {
            throw new Error("exceeded distance limit");
        }
    }

    /*
    function checkAircraftRevision(distanceLimit, distancesArray) {
        let totalDistance = 0;
        let distance;
        for(distance of distancesArray) {
            totalDistance += distance;
        }

        if (totalDistance <= distanceLimit/2) {
            return "The revision needs to be done within the next 3 months";
        } else if (totalDistance <= 3 * distanceLimit/4) {
            return "The revision needs to be done within the next 2 months";
        } else {
            return "The revision needs to be done within the next month";
        }
     }
     */

    return {calculateNumberOfFlights, checkAircraftRevision};

}

module.exports = Flights();
