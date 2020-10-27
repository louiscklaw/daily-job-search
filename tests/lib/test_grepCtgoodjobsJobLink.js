const fs = require('fs')
const {SRC_DIR} = require('../config')

const {grepCtgoodjobsJobLink} = require(`${SRC_DIR}/lib/grepCtgoodjobsJobLink`)
const {getPathnamebyJobLink} = require(`${SRC_DIR}/lib/ctgoodjobs/getPathnamebyJobLink`)


var page_content = fs.readFileSync('ctgoodjobs_index.html',{encoding:'utf-8'})

function test_grepCtgoodjobsJobLink(){
  var links = grepCtgoodjobsJobLink(page_content)
  var links_length = links.length
  for (i=0;i<links_length; i++){
    var link = links[i]
    console.log(getPathnamebyJobLink(link))
  }
}

function helloworld(){
  console.log('helloworld')
}

test_grepCtgoodjobsJobLink()