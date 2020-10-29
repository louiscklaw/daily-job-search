

function getId(glassdoor_link){
  var m = glassdoor_link.match(/jobListingId=(\d+)/)
  return m[1]
}

function parseGlassdoorLink(glassdoor_link){
  var temp = glassdoor_link.match(/href="(.+?)"/)[1]
  return {
    id: getId(temp)
  }
}


module.exports={
  parseGlassdoorLink
}
