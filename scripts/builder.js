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
        let themeSrc = JSON.stringify(require(`../src/${source}`)),
            themeDist = `./themes/${name.toLowerCase().replace(' ~ ', '-').split(' ').join('-')}_color-theme.json`;

        for (let color in colors) {
            themeSrc = themeSrc.replace(new RegExp(`~${color}~`, 'g'), `${colors[color]}`);
        }

        package.contributes.themes.push({
            label: name,
            uiTheme: type,
            path: themeDist
        });

        try {
            fs.writeFileSync(themeDist, themeSrc + "\n");
            fs.writeFileSync('package.json', JSON.stringify(package, null, '\t') + "\n");
        } catch (err) {
            return console.error(err);
        }

        return Builder;
    }
}

module.exports = Builder;
