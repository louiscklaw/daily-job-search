const fs = require('fs');
const path = require('path');
const {IGNORE_SC_PATH, NEW_SC_PATH} = require('../../../config');
const {readIgnoredJobDb} = require('./addJobToIgnoreDb')

function checkIfNewJobs(){
  // png_filename_in
  var list_new_png = fs.readdirSync(NEW_SC_PATH)
    .filter(x => x.search(/.+.png$/) > -1)
    .filter(x => x.search(/ctgoodjobs_.+?.png/) > -1)
    .map(x => `${NEW_SC_PATH}/${x}`);

  var list_ignored_job = readIgnoredJobDb()

  list_new_png.map(x => {
    name_to_compare = path.basename(x)
    if (list_ignored_job.includes(name_to_compare)){
      fs.unlinkSync(x)
    }else{
      console.log(name_to_compare)
    }
  })

  return
}

function listNewPngFiles(){


  console.log(list_new_png)
}

module.exports={
  checkIfNewJobs
}
