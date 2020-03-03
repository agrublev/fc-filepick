<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [FC-Filepick](#fc-filepick)
  - [Installation](#installation)
  - [Methods](#methods)
  - [Options](#options)
    - [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# FC-Filepick

A file picker made for node cli applications using enquirer.

## Installation

```bash
yarn add -D fc-filepick
```

## Methods

Select a directory

```js
const fcFilepicker = require("fc-filepick");

(async () => {
  let dirLocation = await fcFilepicker();
  console.info("Location of folder: ", dirLocation);
})();
```

Select a file

```js
const fcFilepicker = require("fc-filepick");

(async () => {
  let fileLocation = await fcFilepicker({ type: "file" });
  console.info("Location of file: ", fileLocation);
})();
```

## Options

- **question** (string) Show the question for select the file. _Default: 'Choose a file/folder'_.
- **type** (string) **folder/file** select a folder or file . _Default: 'folder'_.
- **folder** (string) Starting location of search. _Default: '.'_.

### Example

```javascript
const fcFilepicker = require("fc-filepick");

fcFilepicker({ type: "file" }).then(location => {
  console.info("Location of file: ", fileLocation);
});
```
