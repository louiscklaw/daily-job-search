const { parse } = require( 'yaml' )
const {parseCtgoodjobsLink} = require('./parseCtgoodjobsLink')
const {getCtgoodjobJobDetailLink} = require('./getCtgoodjobJobDetailLink')


function grepCtgoodjobsJobLink(page_content){
  if (page_content != null){
    var links = page_content.match(/href="\/job.+?"/g)
    return links
      .map(x => parseCtgoodjobsLink(x) )
      .map(x => getCtgoodjobJobDetailLink(x.position, x.id))

  }else{
    return []

  }
}

function helloworld_grepCtgoodjobsJobLink(){
  console.log('helloworld_grepCtgoodjobsJobLink')
}

module.exports={
  grepCtgoodjobsJobLink,
  helloworld_grepCtgoodjobsJobLink
}
