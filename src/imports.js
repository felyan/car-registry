import cars from './components/Form';

const carData = [
  {
    id: 1,
    producer: 'Audi',
    type: 'A3',
    engine_displacement: 1900,
    color: 'fehér',
    design: 'sedan',
    date_of_manufacture: 2019,
    web_of_producer: 'https://wwww.audi.hu/'
  },
  {
    id: 2,
    producer: 'BMW',
    type: 'Coupé',
    engine_displacement: 1600,
    color: 'szürke',
    design: 'hatchback',
    date_of_manufacture: 2018,
    web_of_producer: 'https://www.bmw.hu'
  },
  {
    id: 3,
    producer: 'Toyota',
    type: 'Corolla',
    engine_displacement: 1800,
    color: 'sötétkék',
    design: 'sedan',
    date_of_manufacture: 2016,
    web_of_producer: 'https://www.toyota.hu/'
  },
];

carData.push(cars);

export {carData};