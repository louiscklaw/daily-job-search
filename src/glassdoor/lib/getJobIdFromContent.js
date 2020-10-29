function getJobIdFromContent(page_content){
  return page_content.match(/'id' : "(.+?)"/)[1]
}

module.exports={
  getJobIdFromContent
}
