function Prices() {
  function calculateFinalPrice(b, p, f) {
    //let calc = b + f/100.0*b + p/100.0*b;
    let pp =  p/100.0*b;
    let fp =  f/100.0*(b+pp);
    let calc = b + pp + fp; 
    console.log(pp + ', ' + fp + ', ' + calc);
    return calc.toFixed(2);
  }

  function calculateDefaultFinalPrice(b, pt, ft) {
    ft = ft.toLowerCase();
    pt = pt.toLowerCase();
    if (pt === 'regular' && ft == 'economy') {
      return calculateFinalPrice(b, -5, -3);
    }
    if (pt === 'regular' && ft == 'business') {
      return calculateFinalPrice(b, -5, 10);
    }
    if (pt === 'vip' && ft == 'economy') {
      return calculateFinalPrice(b, 5, -3);
    }
    if (pt === 'vip' && ft == 'business') {
      return calculateFinalPrice(b, 5, 10);
    }
  }

  function calculateTotalFinalPrice(s, pt, ft, bp) {
    return s * calculateDefaultFinalPrice(bp, pt, ft);
  }

  return { calculateTotalFinalPrice, calculateFinalPrice , calculateDefaultFinalPrice};


}

module.exports = Prices();

