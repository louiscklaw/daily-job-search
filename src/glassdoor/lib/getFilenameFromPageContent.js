const {getJobPositionFromContent}= require('./getJobPositionFromContent')
const {getJobIdFromContent} = require('./getJobIdFromContent')

function getFilenameFromPageContent(page_content){
  var job_position = getJobPositionFromContent(page_content)
  var job_id = getJobIdFromContent(page_content)

  return `${job_position}_${job_id}`
}

module.exports={
  getFilenameFromPageContent
}
