function Util() {

  function calculateTotalDistributedPassengers(
    {
      vipPassengersWithBusinessSeats, vipPassengersWithEconomySeats,
      regularPassengersWithBusinessSeats, regularPassengersWithEconomySeats
    }
  ) {
    let x = 
      vipPassengersWithBusinessSeats + vipPassengersWithEconomySeats +
      regularPassengersWithBusinessSeats + regularPassengersWithEconomySeats;

    //console.log('stef: ' + x);
    return x;
  }

  function calculateTotalNumberOfPassengers(p) {
    return p.reduce((s,c) => s+c, 0);
  }

  return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};

}

module.exports = Util();
