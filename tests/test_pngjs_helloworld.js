#!/usr/bin/env node

const fs = require('fs');
const PNG = require( 'pngjs' ).PNG;

async function pngCompare(){
  var temp_png = PNG.sync.read(
    fs.readFileSync( 'helloworld.png' )
  )
}

(async () => {

  await pngCompare()
})()