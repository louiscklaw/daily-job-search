
function getPathnameFromPngFilename(png_filename){
  return png_filename.replace('.png','')
}

module.exports ={
  getPathnameFromPngFilename
}