'use strict';

const flight = 'LH234';
const faisal = {
  name: 'Faisal Gehlot',
  passport: 25978641356,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2597864135) {
    alert('check In');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, faisal);
console.log(flight);
console.log(faisal);
