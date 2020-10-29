const {parseGlassdoorLink} = require('./parseGlassdoorLink')
const {getGlassdoorJobDetailLink} = require('./getGlassdoorJobDetailLink')

function grepLinkBody(link_with_href){
  return link_with_href.match(/href="\/(.+?)"/)[1]
}

function replaceAmpersand(link_in){
  return link_in.replace(/&amp;/g,'&')
}

function grepGlassdoorJobLink(page_content){
  if (page_content != null){
    var links = page_content.match(/href="\/partner.+?"/g)
    return links
      .map(x => `https://www.glassdoor.com.hk/${grepLinkBody(x)}` )
      .map(x => replaceAmpersand(x))

  }else{
    return []

  }
}

module.exports={
  grepGlassdoorJobLink
}
