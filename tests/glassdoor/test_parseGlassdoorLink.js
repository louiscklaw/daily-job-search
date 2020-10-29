const { assert } = require( 'console' )
const fs = require('fs')
const path = require('path')

const {SRC_HOME, TEST_HOME} = require('../../src/config')

const GLASSDOOR_SRC_HOME = path.resolve(`${SRC_HOME}/glassdoor`)
const GLASSDOOR_TEST_HOME = path.resolve(`${TEST_HOME}/glassdoor`)

const {parseGlassdoorLink} = require(`${GLASSDOOR_SRC_HOME}/lib/parseGlassdoorLink`)

const test_href = `href="/partner/jobListing.htm?pos=102&amp;ao=1044318&amp;s=149&amp;guid=0000017573647a0b923f8674c913d99f&amp;src=GD_JOB_AD&amp;t=SRFJ&amp;vt=w&amp;uido=45787D8E56F1CE1C768B57551AEC4798&amp;cs=1_001b9516&amp;cb=1603958766574&amp;jobListingId=3712801549"`

function test_parseGlassdoorLink( link_with_href ) {
  // input link, output position and id
  assert(parseGlassdoorLink(test_href), 'test_parseGlassdoorLink failed')
}

function test() {
  test_parseGlassdoorLink()
}

test()
