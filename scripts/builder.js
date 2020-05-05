const fs  = require('fs')
    , del = require('del');

let package = require('../package.json');

let Builder = {
    clear: () => {
        del.sync(['themes/*']);

        try {
            package.contributes.themes = [];
            fs.writeFileSync('package.json', JSON.stringify(package, null, '\t'));
        } catch (err) {
            return console.error(err);
        }

        return Builder;
    },

    create: (source, colors, name, type) => {
        let theme = JSON.stringify(require(`../src/${source}`)),
            themePath = `./themes/${name.toLowerCase().replace(' ~ ', '-').split(' ').join('-')}_color-theme.json`;

        for (let color in colors) {
            theme = theme.replace(new RegExp(`~${color}~`, 'g'), `${colors[color]}`);
        }

        package.contributes.themes.push({
            label: name,
            uiTheme: type,
            path: themePath
        });

        try {
            fs.writeFileSync(themePath, theme);
            fs.writeFileSync('package.json', JSON.stringify(package, null, '\t'));
        } catch (err) {
            return console.error(err);
        }

        return Builder;
    }
}

module.exports = Builder;