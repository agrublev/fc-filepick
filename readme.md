# Filepick 

A file picker made for node cli applications.

## [Documentation](#documentation)
<a name="documentation"></a>

### Installation

```
npm install filepick --save
```

### Methods

Get the full path of an selected file
``` 
filepick(directory, options) -> Promise
```

#### Options
* **question** (string) Show the question for select the file. *Default: 'Choose a file'*.

#### Example
``` javascript
const filepick = require('filepick');

filepick('.', {
  question: 'Escolha um arquivo de backup'
}).then(file => {
  console.log('file', file);
}).catch(err => {
  console.log('Error Getting the file!', err);
});
```