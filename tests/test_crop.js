const fs = require('fs');
const PNG = require( 'pngjs' ).PNG;

var dst = new PNG({ width: 960, height: 900 });
fs.createReadStream("test_jobad1.png")
  .pipe(new PNG())
  .on("parsed", function () {
    this.bitblt(dst, 0, 0, 960, 900, 0, 0);
    dst.pack().pipe(fs.createWriteStream("out.png"));
  });
