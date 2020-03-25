function Passengers() {
/*
In passengers.js, write a checkFlightCapacity() function that gets as parameters the flight capacity and and array of passengers numbers. Calculate the total number of passengers by adding each number of passengers from the array. If the total number of passengers is less that the capacity of the flight, return it. If there are more passengers than the flight capacity, you should throw an error.

Export the checkFlightCapacity() function and the Passengers module itself.

Check to see that the functionality "Check the flight capacity" from the front end is running fine.*/

    function checkFlightCapacity(fc, pn) {
        let sum = pn.reduce((s, c) => s+c, 0);
        if (sum < fc) {
            return sum;
        } else {
            throw Error("Too many passengers");
        }
    }

  //  that receives as parameters the number of VIP passengers, the number of regular passengers, the number of flights, the number of business seats per flight, and the number of economy seats per flight. 
  function distributeAllSeatsToAllPassengers(vips, reg, f, seats, ecos) {

    let b_tot = seats * f;
    let e_tot = ecos * f;

    function dec_seats(p, s) {
      let p_s;
      if (p < s) {
        p_s = p;
        s-= p;
        p = 0;
      } else {
        p_s = s;
        p -= s;
        s= 0;
      }
      //console.log('stef: ' + p_s);
      return [p_s, p, s];
    }

    // VIP passengers with business seats;
    let v_b;
    [v_b, vips, b_tot] = dec_seats(vips, b_tot);

    // VIP passengers with economy seats;
    let v_e = 0;
    if (vips > 0) {
      [v_e, vips, e_tot] = dec_seats(vips, e_tot);
    }

    // regular passengers with business seats;
    let r_b = 0;
    if (b_tot > 0) {
      [r_b, reg, b_tot] = dec_seats(reg, b_tot);
    }

    // regular passengers with economy seats.
    let r_e = 0;
    if (e_tot > 0) {
      [r_e, reg, e_tot] = dec_seats(reg, e_tot);
    }

    /*
    return {
      v_b, v_e, r_b, r_e
    };
    */
    /*
     *         return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
                vipPassengersWithEconomySeats:vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
                regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
      */

    return {
      vipPassengersWithBusinessSeats:v_b, vipPassengersWithEconomySeats:v_e, 
      regularPassengersWithBusinessSeats:r_b, regularPassengersWithEconomySeats:r_e
    };

  }

    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};

}

module.exports = Passengers();

