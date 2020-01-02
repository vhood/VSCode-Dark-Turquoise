# Dark Turquoise

[![Version](https://vsmarketplacebadge.apphb.com/version-short/999-Victor.dark-turquoise.svg)](https://marketplace.visualstudio.com/items?itemName=999-Victor.dark-turquoise)
[![License](https://img.shields.io/github/license/999-Victor/vscode-dark-turquoise-theme)](https://github.com/999-Victor/vscode-dark-turquoise-theme)  
[![Issues](https://img.shields.io/github/issues/999-Victor/vscode-dark-turquoise-theme)](https://github.com/999-Victor/vscode-dark-turquoise-theme/issues)
[![Rating](https://vsmarketplacebadge.apphb.com/rating-short/999-Victor.dark-turquoise.svg)](https://marketplace.visualstudio.com/items?itemName=999-Victor.dark-turquoise&ssr=false#review-details)
[![Installs](https://vsmarketplacebadge.apphb.com/installs-short/999-Victor.dark-turquoise.svg)](https://marketplace.visualstudio.com/items?itemName=999-Victor.dark-turquoise)  

A turquoise-based Visual Studio Code theme.  
Calm color scheme with rainbow color palette helps you focus on all code points without straining.  
Borders of matched bracket pair are highlighted in purple for your attention (configurable).  

**[Vote please](https://marketplace.visualstudio.com/items?itemName=999-Victor.dark-turquoise&ssr=false#review-details)**

***

## Theme

**Dark Turquoise ~ Rainbow**  
This theme is better for low brightness displays
![Dark Turquoise ~ Rainbow](rainbow.png)

## Installation

Install the theme from [here](https://marketplace.visualstudio.com/items?itemName=999-Victor.dark-turquoise) or follow the steps:

1. Launch [Code](https://code.visualstudio.com/).
2. Choose Extensions from the activity bar or serch command `Intall Extentions` or press `cmd+shift+X`.
3. Search for **dark turquoise**.
4. Install **Dark Turquoise Theme**.
5. Choose `Preferenses: Color Theme` or press `cmd+K+T`
6. Select **Dark Turquoise ~ Rainbow** and enjoy!

**cmd** is **ctrl** in Windows.

## Configuration

You may change the color of brackes match border (*default it's purple*), to do this follow the steps:

1. Open User Settings (press `cmd+,` / `ctrl+,`)
2. Search *settings.json*
3. Edit *settings.json*
4. add `"editorBracketMatch.border": "#dcdcdc"` (*you may choose any color*)

### Preferences at the preview

I recommend the [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) extension with these user settings

```json
"indentRainbow.colors": [
    "rgba(255,255,255,0.00)",
    "rgba(255,255,255,0.02)",
    "rgba(255,255,255,0.04)",
    "rgba(255,255,255,0.02)",
],
```

All brackets are colorized to gray by [Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

```json
"bracket-pair-colorizer-2.colors": [
    "#dcdcdc",
    "#bbbbbb"
],
```

also this extension adds nice current section lines.

***

[Release Notes](CHANGELOG.md)  
[Issues](https://github.com/999-Victor/vscode-dark-turquoise-theme/issues)

***

[![Paypal.me](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/999Victor)  
