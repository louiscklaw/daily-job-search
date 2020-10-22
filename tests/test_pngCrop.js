var PNGCrop = require( 'png-crop' );

var config1 = {
  width: 960,
  height: 900,
  top: 0,
  left: 0
};
// pass a path, a buffer or a stream as the input
PNGCrop.crop(
  '/home/logic/_workspace/jobs_search_tryout/tests/test_jobad1.png',
  '/home/logic/_workspace/jobs_search_tryout/tests/output.png', config1,
  function ( err ) {
    if ( err ) throw err;
    console.log( 'done!' );
  } );
