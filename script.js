'use strict';

const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightnum}`, name });
  },
};
Lufthansa.book(239, 'Maryam Arshad');
Lufthansa.book(654, 'Noman Ejaz');
//console.log(Lufthansa);

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = Lufthansa.book;

//book(26, 'sarah');
// call method
book.call(eurowings, 26, 'sarah');
console.log(eurowings);

book.call(Lufthansa, 239, 'Marre');
console.log(Lufthansa);

// another object

const swiss = {
  airline: 'swiss',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 283, 'john');
//console.log(swiss);

//apply method

const flightData = [583, 'Marry Cooper'];
//book.apply(swiss, flightData);

book.call(swiss, ...flightData);
console.log(swiss);
