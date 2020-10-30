const path = require( 'path' );
const PNGCrop = require('png-crop');

function getPngHead( png_filepath, ) {
  // var png_filepath = '/home/logic/_workspace/jobs_search_tryout/tests/test_jobad1.png'
  var head_png_filename = `head_${path.basename(png_filepath)}`;
  var png_path = path.dirname( png_filepath )
  var head_png_path = `${png_path}/${head_png_filename}`

  var config1 = {
    width: 960,
    height: 900,
    top: 0,
    left: 0
  };
  // pass a path, a buffer or a stream as the input
  PNGCrop.crop(
    png_filepath, head_png_path, config1,
    function ( err ) {
      if ( err ) throw err;
      console.log( 'done!' );
    } );
  return head_png_path
}

function getPngHeadHelloworld(hello_path,cb){
  console.log('getPngHeadHelloworld helloworld')
  return cb()
}

module.exports = {
  getPngHead,
  getPngHeadHelloworld
}
