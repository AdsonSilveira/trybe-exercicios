let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for (let key in car){
    console.log( key  + ": " + car[key]);
  }
  //pq essa maldita key é um valor sendo so key e em car[key] tem outro valor?
  //será que ele só vale o valor do 'index' e car[key] vale o valor dos alores?, não sei, to ficando doido.
