[![Build Status](https://travis-ci.org/Briles/scheme-sweet.svg?branch=master)](https://travis-ci.org/Briles/scheme-sweet)

Scheme Sweet
------------
A sweet suite of tools for creating sweet Sublime Text color schemes

Usage
-----
```javascript
const SchemeSweet = require('./index.js');

var newInstance = new SchemeSweet({
  palette: {
    background: '<color>',
    bg1: '<color>',
    bg2: '<color>',
    bg3: '<color>',
    bg4: '<color>',
    gray: '<color>',
    foreground: '<color>',
    fg1: '<color>',
    fg2: '<color>',
    fg3: '<color>',
    fg4: '<color>',
    red: '<color>',
    green: '<color>',
    blue: '<color>',
    cyan: '<color>',
    pink: '<color>',
    yellow: '<color>',
    orange: '<color>',
    purple: '<color>',
  },
  metadata: {
    name: 'Give your color scheme a name',
    author: 'Give yourself some attribution',
    comment: 'A short but sweet description about your color scheme',
  },
  template: function,
});
```

Configuration
-------------

Your color scheme is configured by passing an object to the SchemeSweet
constructor.

#### Colors

The configuration object must have a `palette` property which contains the
following properties:

```javascript
background: '<color>',
bg1: '<color>',  // v Darker
bg2: '<color>',  // |
bg3: '<color>',  // |
bg4: '<color>',  // v Lighter

gray: '<color>',

foreground: '<color>',
fg1: '<color>',  // v Darker
fg2: '<color>',  // |
fg3: '<color>',  // |
fg4: '<color>',  // v Lighter

red: '<color>',
green: '<color>',
blue: '<color>',
cyan: '<color>',
pink: '<color>',
yellow: '<color>',
orange: '<color>',
purple: '<color>',
```

The colors can be further configured by providing optional neutral accent
colors:

```javascript
neutralRed: '<color>',
neutralGreen: '<color>',
neutralBlue: '<color>',
neutralCyan: '<color>',
neutralPink: '<color>',
neutralYellow: '<color>',
neutralOrange: '<color>',
neutralPurple: '<color>',
```

Colors can be any valid [TinyColor](https://github.com/bgrins/TinyColor) color.

#### Metadata

You can give your color scheme a name, author, and comment by adding
a metadata property to the configuration object:

```javascript
metadata: {
  name: 'Give your color scheme a name',
  author: 'Give yourself some attribution',
  comment: 'A short but sweet description about your color scheme',
},
```

#### Templates

The template determines which colors are mapped to what syntax scopes.
Scheme Sweet comes with a single default template, but you can also provide
your own by adding a template property to the configuration object:

```javascript
template: function,
```

Methods
-------

- `SchemeSweet.build()` returns your color scheme as `plist`
- `SchemeSweet.setTemplate([func=defaultTemplate])` set/reset/change the template

License
-------
[MIT](https://en.wikipedia.org/wiki/MIT_License)
