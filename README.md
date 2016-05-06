# babel-preset-electron

> Babel preset with all plugins for Electron.

## Install

#### Electron 0.37.8
```sh
$ npm install --save-dev babel-preset-electron@0.37.8
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["electron"]
}
```

### Via CLI

```sh
$ babel script.js --preset electron
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["electron"]
});
```
