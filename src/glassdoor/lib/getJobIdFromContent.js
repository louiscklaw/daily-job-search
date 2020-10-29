const fs = require('fs')

function getJobIdFromContent(page_content){
  try {
    return page_content.match(/'id' : "(.+?)"/)[1]
  } catch (error) {
    fs.writeFileSync('./reading_id_fail_for_glassdoor.html',page_content,{encoding:'utf-8'})
  }
}

module.exports={
  getJobIdFromContent
}
