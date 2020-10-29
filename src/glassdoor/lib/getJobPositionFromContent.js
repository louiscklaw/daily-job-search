const fs = require('fs')

function sanitizeFilename(filename_in){
  return filename_in
    .replace(/\//g,'_')
    .replace(/ /g,'')
    .replace(/_+/g,'_')
    .toLowerCase()
}

function getJobPositionFromContent(page_content){
  try {
    return 'glassdoor_'+sanitizeFilename(page_content.match(/'jobTitle' : "(.+?)"/)[1])
  } catch (error) {
    fs.writeFileSync('./page_content_failed.html', page_content, {encoding:'utf-8'})
  }
}

module.exports={
  getJobPositionFromContent
}
