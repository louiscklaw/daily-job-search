const { assert } = require( 'console' )
const fs = require('fs')
const {SRC_DIR} = require('../config')

const {grepCtgoodjobsJobLink} = require(`${SRC_DIR}/lib/grepCtgoodjobsJobLink`)
const {getPathnamebyJobLink} = require(`${SRC_DIR}/lib/ctgoodjobs/getPathnamebyJobLink`)


var page_content = fs.readFileSync('ctgoodjobs_index.html',{encoding:'utf-8'})

function test_grepCtgoodjobsJobLink(){
  var links = grepCtgoodjobsJobLink(page_content)
  var links_length = links.length

  assert(links_length != 0,'test_grepCtgoodjobsJobLink failed')
}

function test_grepCtgoodjobsJobLink_with_null_input(){
  var links = grepCtgoodjobsJobLink(null)
  var links_length = links.length
  assert(links_length == 0,'test_grepCtgoodjobsJobLink_with_null_input failed')
}

function helloworld(){
  // console.log('helloworld')
}



function test(){
  test_grepCtgoodjobsJobLink()
  test_grepCtgoodjobsJobLink_with_null_input()
}

test()