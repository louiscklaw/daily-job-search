
function getJobLinkByFilename(png_filename){
  var temp = png_filename.match(/.+?jobs_sc_(.+?)\.png/)[1]
  return `https://hk.jobsdb.com/hk/en/job/${temp}`
}


module.exports={
  getJobLinkByFilename
}