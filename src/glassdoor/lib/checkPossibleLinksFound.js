
function checkPossibleLinksFound(page_content){
  return page_content.match(/href="\/partner.+?"/g) != null
}

module.exports={
  checkPossibleLinksFound
}
