# FC-Filepick

A file picker made for node cli applications using enquirer.

<img width="479" alt="image" src="https://user-images.githubusercontent.com/801433/206047869-1e6a846b-6167-427e-80e7-d0e9ec14b7b0.png">

## Installation

```bash
npm install fc-filepick
```

or with yarn

```bash
yarn add fc-filepick
```

## Usage

`fc-filepick` is a simple to use file/folder selector. You can call it without any options to select a folder from the current working directory.

### Select a directory

```js
const fcFilepicker = require("fc-filepick");

(async () => {
  let dirLocation = await fcFilepicker();
  console.info("Location of folder: ", dirLocation);
})();
```

### Select a file

```js
const fcFilepicker = require("fc-filepick");

(async () => {
  let fileLocation = await fcFilepicker({ type: "file" });
  console.info("Location of file: ", fileLocation);
})();
```

## Options

You can pass an options object to `fcFilepicker` to customize its behavior.

- **question** (string) The question to display to the user.
  - Default: `'Choose a file/folder'`
- **type** (string) The type of item to select. Can be `'folder'` or `'file'`.
  - Default: `'folder'`
- **folder** (string) The starting directory for the file picker.
  - Default: `'.'`

### Example with options

```javascript
const fcFilepicker = require("fc-filepick");

const options = {
  question: "Please, select a configuration file",
  type: "file",
  folder: "./config"
};

fcFilepicker(options).then(location => {
  console.info("Location of file: ", location);
});
```

## Demo

To run a demo of `fc-filepick`, clone the repository and run the following commands:

```bash
npm install
npm run demo
```

This will run the `demo.js` script, which showcases how to use the file picker to select a folder and then a file.

## Deployment with Surge.sh

The documentation website is built with [docsify](https://docsify.js.org/#/) and can be easily deployed to [Surge.sh](https://surge.sh/), a static web publishing service.

To deploy the documentation, you need to have `surge` installed globally:
```bash
npm install -g surge
```

Then, from the root of the project, run the following command:
```bash
surge docs/
```

This will deploy the contents of the `docs` folder to a unique surge.sh domain.
