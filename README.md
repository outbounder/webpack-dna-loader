# webpack-dna-loader

## usage

1. install `webpack-dna-loader` dependency

  ```
  $ npm install webpack-dna-loader --save
  ```

2. create dna configuration (will be loaded via [organic-dna-loader](https://github.com/outbounder/organic-dna-loader))

  ```
  + my-project
  |+ dna
   |+ client
    |- config.json
  ```

3. require `dna`

  ```
  // in some-file.js
  var dna = require('webpack-dna-loader!')
  ```

## optional

### select dna `branch` as query parameter

```
var dna = require('webpack-dna-loader?branch=server.config!')
```
