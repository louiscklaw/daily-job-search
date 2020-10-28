const assert = require('assert')
const { cosnoleLogHighlight } = require('../../util')
const {SRC_DIR, LIB_CTGOODJOBS} = require('../../config');
const {CATEGORY_NOT_EXIST,lookupJobArea} = require(`${LIB_CTGOODJOBS}/lookupJobArea`)

function test_lookupJobArea(){
  assert('021_jc'==lookupJobArea('all-information-technology'), 'lookup job category failed')

  var error_throw = false
  try {
    lookupJobArea('didnt_exist')
  } catch (error) {
    error_throw = true
    cosnoleLogHighlight('exception accepted as test')
  }

  assert(error_throw,'lookup not existing didn\'t throw exception')
}

function helloworld_test_lookupJobArea(){
  console.log('helloworld_test_lookupJobArea')
}

function test(){
  helloworld_test_lookupJobArea()
  test_lookupJobArea()
}

test()