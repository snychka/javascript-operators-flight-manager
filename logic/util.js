function Util() {

  function checkInput(i) {
    if (!i || isNaN(i)) {
      throw Exception();
    }
  }

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

  return {checkInput, calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};

}

module.exports = Util();
