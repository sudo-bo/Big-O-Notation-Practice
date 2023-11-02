// car oo challeng exercise

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beeeeeep BEEEEEEEP";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return "VROOOOM VROOOOOM";
  }
}

class Garage {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }
  add(motorDevice) {
    if (motorDevice instanceof Vehicle) {
      this.vehicles.push(motorDevice);
    }
  }
}

// How Web Works Exercise
/*
-http: a set of rules as for how data is sent and accessed to and from the server
-url: adress for internet resources
-dns: phonebook for urls, the internet resources
-query string: a specifier for web pages that uses key value pairs
-get and post: get simply requests information from the server, while post sends changes to the server
-http request: when data is requested from a client to the server using html protocol, often the data requested is an html page
-http response: the inverse of the above
-http header: headers provide information about the request or the response
-what happens when you type a URL in a browser?: a lot

part2:
-curl "https://icanhazdadjoke.com/search?term=pirate"
-dig +short icanhazdadjoke.com


*/
