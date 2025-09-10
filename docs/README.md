# FC-Filepick

A file picker made for node cli applications using enquirer.

<img width="479" alt="image" src="https://user-images.githubusercontent.com/801433/206047869-1e6a846b-6167-427e-80e7-d0e9ec14b7b0.png">

`fc-filepick` is an interactive file and folder selector for command-line applications. It's built on top of `enquirer` and provides a simple, promise-based API.

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

The function returns a `Promise` that resolves with the selected path as a string, or `false` if the selection is canceled.

### Select a directory

```js
const fcFilepicker = require("fc-filepick");

(async () => {
  try {
    const dirLocation = await fcFilepicker();
    if (dirLocation) {
      console.info("You selected this folder: ", dirLocation);
    } else {
      console.info("Selection was canceled.");
    }
  } catch (e) {
    console.error("An error occurred:", e);
  }
})();
```

### Select a file

```js
const fcFilepicker = require("fc-filepick");

(async () => {
  const fileLocation = await fcFilepicker({ type: "file" });
  if (fileLocation) {
    console.info("You selected this file: ", fileLocation);
  }
})();
```

## Options

You can pass an options object to `fcFilepicker` to customize its behavior.

- **question** (string) The question to display to the user.
  - Default: `'Choose a file/folder'`
- **type** (string) The type of item to select. Can be `'folder'` or `'file'`.
  - Default: `'folder'`
- **folder** (string) The starting directory for the file picker. This can be a relative or absolute path.
  - Default: `'.'` (the current working directory)

### Example with options

```javascript
const fcFilepicker = require("fc-filepick");

const options = {
  question: "Please, select a configuration file from the 'config' directory",
  type: "file",
  folder: "./config" // Start in a sub-directory
};

fcFilepicker(options).then(location => {
  if (location) {
    console.info("Location of file: ", location);
  }
});
```

### Custom Path Input
The file picker also allows you to manually enter a path instead of selecting from the list. Simply choose the "Enter custom path" option from the list and you will be prompted to type in the path.

## Demo

To run a demo of `fc-filepick`, clone the repository and run the following commands:

```bash
# Install dependencies
yarn install

# Run the.
npm run demo
```

This will run the `demo.js` script, which showcases how to use the file picker to select a folder and then a file.

## Deployment with Surge.sh

The documentation website is built with [docsify](https://docsify.js.org/#/) and can be easily deployed to [Surge.sh](https://surge.sh/), a static web publishing service.

To deploy the documentation from your local machine:

1.  Make sure you have `surge` installed globally. If not, run:
    ```bash
    npm install -g surge
    ```
2.  Navigate to the root directory of this project in your terminal.
3.  Run the following command:
    ```bash
    surge docs/
    ```
4.  Surge will then deploy the contents of the `docs` folder and provide you with a unique URL for your live site.
