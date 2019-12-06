const fs = require('fs')
    , colors = {
        'main': '#116062',
        'lightMain': '#5ec4cd',
        'darkMain': '#10262e',
        'background': '#001314',
        'black': '#111111',
        'white': '#f5fffa',
        'lightGrey': '#c0c0c0',
        'darkGrey': '#333333',
        'string': '#deb887',
        'red': '#f53d68',
        'yellow': '#fbec5d',
        'green': '#50c878',
        'blue': '#1faee9',
        'purple': '#da70d6'
    };

let DarkTurquoise = JSON.stringify(require('./src/dark-turquoise-color-theme.json'), null, '\t');

function parseTheme(theme)
{
    try {
        result = theme;
        for (let color in colors) {
            result = result.replace(new RegExp(`~${color}~`, 'g'), `${colors[color]}`);
        }
        const bool = fs.writeFileSync('./themes/dark-turquoise-color-theme.json', result);
    } catch (err) {
        console.error(err);
    }
}

parseTheme(DarkTurquoise);