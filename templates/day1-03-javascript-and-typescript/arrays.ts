import Car from './Car';

let cars: Car[] = [];
cars.push(new Car('BMW', 'M3 GTR', 2006, 387, 'Silver/Blue', 78200),
                new Car('Opel', 'Corsa-E', 2020, 136, 'Orange', 19980),
                new Car('Nissan', 'Skyline GT-R 34', 1999, 280, 'Blue', 67320),
                new Car('Mercedes', 'C63 AMG', 2018, 510, 'Yellow', 96499));

cars.unshift(new Car('Volkswagen', 'Golf GTI', 2012, 245, 'Red', 42499));

console.log(cars);