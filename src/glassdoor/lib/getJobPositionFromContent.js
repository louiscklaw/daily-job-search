function sanitizeFilename(filename_in){
  return filename_in
    .replace(/\//g,'_')
    .replace(/ /g,'')
    .replace(/_+/g,'_')
    .toLowerCase()
}

function getJobPositionFromContent(page_content){
  return 'glassdoor_'+sanitizeFilename(page_content.match(/'jobTitle' : "(.+?)"/)[1])
}

module.exports={
  getJobPositionFromContent
}
