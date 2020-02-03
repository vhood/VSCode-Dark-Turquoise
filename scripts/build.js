let Builder = require('./constructor');

const rainbow = {
        'main': '#116062',
        'lightMain': '#5ec4cd',
        'darkMain': '#10262e',
        'background': '#001314',
        'black': '#111111',
        'white': '#f5fffa',
        'darkGrey': '#1e1e1e',
        'string': '#deb887',
        'red': '#f53d68',
        'yellow': '#fbec5d',
        'green': '#50c878',
        'blue': '#1faee9',
        'purple': '#da70d6'
    }
    , rainbow_night = {
        'main': '#1d4654',
        'lightMain': '#00b3b3',
        'darkMain': '#0d1c22',
        'background': '#030705',
        'black': '#0a0a0a',
        'white': '#e6e6e6',//'#faf0e6',
        'darkGrey': '#131313',
        'string': '#bca366',
        'red': '#cc4e5c',
        'yellow': '#f7d263',
        'green': '#00c77b',
        'blue': '#4b93eb',
        'purple': '#dd80cc'//'#d17bd1'
    };

Builder.clear()
    .create('dark-turquoise~rainbow.json', rainbow, 'Dark Turquoise ~ Rainbow', 'vs-dark')
    .create('dark-turquoise~rainbow.json', rainbow_night, 'Dark Turquoise ~ Night Rainbow', 'vs-dark');