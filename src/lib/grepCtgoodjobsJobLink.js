const { parse } = require( 'yaml' )
const {parseCtgoodjobsLink} = require('./parseCtgoodjobsLink')
const {getCtgoodjobJobDetailLink} = require('./getCtgoodjobJobDetailLink')


function grepCtgoodjobsJobLink(page_content){
  return page_content.match(/href="\/job.+?"/g)
    .map(x => parseCtgoodjobsLink(x) )
    .map(x => getCtgoodjobJobDetailLink(x.position, x.id))
}

function helloworld_grepCtgoodjobsJobLink(){
  console.log('helloworld_grepCtgoodjobsJobLink')
}

module.exports={
  grepCtgoodjobsJobLink,
  helloworld_grepCtgoodjobsJobLink
}
