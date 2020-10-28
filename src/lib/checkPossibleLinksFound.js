
function checkPossibleLinksFound(page_content){
  return page_content.match(/href="\/job.+?"/g) != null
}


module.exports={
  checkPossibleLinksFound
}