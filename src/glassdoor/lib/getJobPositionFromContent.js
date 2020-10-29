function getJobPositionFromContent(page_content){
  return page_content.match(/'jobTitle' : "(.+?)"/)[1]
}

module.exports={
  getJobPositionFromContent
}
