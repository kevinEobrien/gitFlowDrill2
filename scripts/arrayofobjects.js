const people = [
  {
    age: 10,
    firstName: 'Ryan',
    lastName: 'Smith',
  },
  {
    age: 11,
    firstName: 'Anthony',
    lastName: 'Lee',
  },
  {
    age: 12,
    firstName: 'John',
    lastName: 'Wros',
  },
  {
    age: 13,
    firstName: 'Ryan',
    lastName: 'Case',
  },
  {
    age: 14,
    firstName: 'Ernest',
    lastName: 'Lamaitis',
  },
  {
    age: 15,
    firstName: 'Tom',
    lastName: 'Steidler',
  },
  {
    age: 16,
    firstName: 'Heather',
    lastName: 'Jossi',
  },
  {
    age: 17,
    firstName: 'Brian',
    lastName: 'Crone',
  },
  {
    age: 18,
    firstName: 'Cory',
    lastName: 'Linfield',
  },
  {
    age: 19,
    firstName: 'Cortland',
    lastName: 'Wheeler',
  },
  {
    age: 20,
    firstName: 'Austin',
    lastName: 'Black',
  },
  {
    age: 21,
    firstName: 'Scott',
    lastName: 'Muggleton',
  },
  {
    age: 22,
    firstName: 'Dave',
    lastName: 'Scheibel',
  },
  {
    age: 23,
    firstName: 'Jason',
    lastName: 'Halladay',
  },
  {
    age: 24,
    firstName: 'David',
    lastName: 'Coblentz',
  },
  {
    age: 25,
    firstName: 'Jeff',
    lastName: 'Wanner',
  },
  {
    age: 26,
    firstName: 'Scott',
    lastName: 'Ownbey',
  },
  {
    age: 27,
    firstName: 'David',
    lastName: 'Galloway',
  },
  {
    age: 28,
    firstName: 'Jeff',
    lastName: 'Bertot',
  },
  {
    age: 29,
    firstName: 'Ryan',
    lastName: 'Lassen',
  },
  {
    age: 30,
    firstName: 'Arya',
    lastName: 'Farahani',
  },
  {
    age: 31,
    firstName: 'Ben',
    lastName: 'Woodbeck',
  },
  {
    age: 32,
    firstName: 'Ethan',
    lastName: 'Printy',
  },
  {
    age: 33,
    firstName: 'Kevin',
    lastName: 'Cannaday',
  },
  {
    age: 34,
    firstName: 'Chad',
    lastName: 'Allen',
  },
  {
    age: 35,
    firstName: 'Ken',
    lastName: 'Gordon',
  },
  {
    age: 36,
    firstName: 'Brennen',
    lastName: 'Wysong',
  },
  {
    age: 37,
    firstName: 'Dave',
    lastName: 'Herring',
  },
  {
    age: 38,
    firstName: 'Mike',
    lastName: 'Hoog',
  },
  {
    age: 39,
    firstName: 'Billy',
    lastName: 'Grimes',
  },
  {
    age: 40,
    firstName: 'John',
    lastName: 'Stanfield',
  },
  {
    age: 41,
    firstName: 'Andrew',
    lastName: 'Rivers',
  },
  {
    age: 42,
    firstName: 'Walter',
    lastName: 'Handloser',
  },
  {
    age: 43,
    firstName: 'Kerrie',
    lastName: 'Bruxvoort',
  },
  {
    age: 44,
    firstName: 'Tim',
    lastName: 'Laney',
  },
  {
    age: 45,
    firstName: 'Jon',
    lastName: 'Webb',
  },
  {
    age: 46,
    firstName: 'Charles',
    lastName: 'Johnston',
  },
  {
    age: 47,
    firstName: 'Garth',
    lastName: 'Reader',
  },
  {
    age: 48,
    firstName: 'Adam',
    lastName: 'Chapman',
  },
  {
    age: 49,
    firstName: 'Nikki',
    lastName: 'Larochelle',
  },
  {
    age: 50,
    firstName: 'Eric',
    lastName: 'Moortgat',
  },
  {
    age: 51,
    firstName: 'Michael',
    lastName: 'Hlavacek',
  },
  {
    age: 52,
    firstName: 'Will',
    lastName: 'Jorgensen',
  },
  {
    age: 53,
    firstName: 'Chris',
    lastName: 'Swedenborg',
  },
  {
    age: 54,
    firstName: 'Max',
    lastName: 'Bohning',
  },
  {
    age: 55,
    firstName: 'Matt',
    lastName: 'Ozanic',
  },
  {
    age: 56,
    firstName: 'Michaeline',
    lastName: 'Nelson Albright',
  },
  {
    age: 57,
    firstName: 'John',
    lastName: 'Danese',
  },
  {
    age: 58,
    firstName: 'Tommy',
    lastName: 'Stockton',
  },
  {
    age: 59,
    firstName: 'Logan',
    lastName: 'Troutman',
  },
  {
    age: 60,
    firstName: 'Paul',
    lastName: 'Valentine',
  },
  {
    age: 61,
    firstName: 'Josh',
    lastName: 'Myers-Dean',
  },
  {
    age: 62,
    firstName: 'Patrick',
    lastName: 'Olson',
  },
  {
    age: 63,
    firstName: 'Colleen',
    lastName: 'Powers',
  },
  {
    age: 64,
    firstName: 'Jorge',
    lastName: 'Rasillo',
  },
  {
    age: 65,
    firstName: 'Jason',
    lastName: 'Steidler',
  },
  {
    age: 66,
    firstName: 'Bard',
    lastName: 'Parnell',
  },
  {
    age: 67,
    firstName: 'Ben',
    lastName: 'Moritz',
  },
  {
    age: 68,
    firstName: 'Mike',
    lastName: 'Smith',
  },
  {
    age: 69,
    firstName: 'Jon',
    lastName: 'Davis',
  },
  {
    age: 70,
    firstName: 'Simon',
    lastName: 'Roberts',
  },
  {
    age: 71,
    firstName: 'Martin',
    lastName: 'Almazan',
  },
  {
    age: 72,
    firstName: 'Jessica',
    lastName: 'Klabak',
  },
  {
    age: 73,
    firstName: 'Leora',
    lastName: 'Wallace',
  },
  {
    age: 74,
    firstName: 'Tim',
    lastName: 'White',
  },
  {
    age: 75,
    firstName: 'Geoff',
    lastName: 'Moffat',
  },
  {
    age: 76,
    firstName: 'Philip',
    lastName: 'Snyder',
  },
  {
    age: 77,
    firstName: 'Jennifer',
    lastName: 'Thompson',
  },
  {
    age: 78,
    firstName: 'Elissa',
    lastName: 'Price',
  },
  {
    age: 79,
    firstName: 'Rachel',
    lastName: 'Brewer',
  },
  {
    age: 80,
    firstName: 'Robert',
    lastName: 'Howard',
  },
  {
    age: 81,
    firstName: 'Alex',
    lastName: 'Steidler',
  },
  {
    age: 82,
    firstName: 'Quinn',
    lastName: 'Aaron',
  },
  {
    age: 83,
    firstName: 'Courtney',
    lastName: 'Foley',
  },
  {
    age: 84,
    firstName: 'Matt',
    lastName: 'Ross',
  },
  {
    age: 85,
    firstName: 'Jonathan',
    lastName: 'Eisen',
  },
  {
    age: 86,
    firstName: 'Vincent',
    lastName: 'Gauthier',
  },
  {
    age: 87,
    firstName: 'Sarah',
    lastName: 'Turner',
  },
  {
    age: 88,
    firstName: 'Andrew',
    lastName: 'Nichols',
  },
  {
    age: 89,
    firstName: 'Zach',
    lastName: 'Przybeck',
  },
  {
    age: 90,
    firstName: 'Hannah',
    lastName: 'Taylor',
  },
  {
    age: 91,
    firstName: 'Tyler',
    lastName: 'Richter',
  },
  {
    age: 92,
    firstName: 'David',
    lastName: 'Braun',
  },
  {
    age: 93,
    firstName: 'Peter',
    lastName: 'Wing',
  },
  {
    age: 94,
    firstName: 'Jim',
    lastName: 'Skelding',
  },
];

module.exports = people;
