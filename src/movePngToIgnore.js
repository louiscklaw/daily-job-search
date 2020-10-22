const fs = require( 'fs-extra' )

const {
  IGNORE_SC_PATH,
  NEW_SC_PATH
} = require( './config' );

function movePngToIgnore( png_file_to_ignore ) {
  // console.log( png_file_to_ignore )

  var png_from = `${NEW_SC_PATH}/${png_file_to_ignore}`
  var png_to = `${IGNORE_SC_PATH}/${png_file_to_ignore}`
  if (fs.existsSync(png_to)) {
    fs.unlinkSync(png_from)
  }else{
    fs.moveSync( png_from, png_to )
  }
}

module.exports = {
  movePngToIgnore
}
