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

  function calculateTotalDistance(ds) {
    let sum = 0;
    ds.forEach(d => {if (d > 0) { sum += d;}});
    return sum;
  }

  function calculateBonusPoints (bs, es, bp, ep) { 
    let tb = calculateTotalDistance(bs);
    let te = calculateTotalDistance(es);

    return tb * bp/100.0 + te * ep/100.0;
  }

  return {checkInput, calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, calculateTotalDistance, calculateBonusPoints};

}

module.exports = Util();
