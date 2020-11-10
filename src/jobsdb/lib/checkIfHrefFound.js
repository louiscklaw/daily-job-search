const fs=require('fs')

function checkIfHrefFound(page_content){
  var text_wanted = 'href="/hk/en/job'
  var re = new RegExp(text_wanted,'g')

  // length to 0 if no match
  var href_found =  page_content.match(re) || {length: 0}


  var num_of_href_found = href_found.length

  if (process.env['SELF_TEST']){
    console.log(`${num_of_href_found} href found`)
  }

  // should around 30 href found
  return num_of_href_found > 25
}

module.exports={
  checkIfHrefFound
}