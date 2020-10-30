const fs = require('fs')


function updateApplicationLetter(email_md_path, jobs_link){
  var temp = fs.readFileSync(email_md_path,{encoding:'utf-8'})
  temp = temp.replace(/\{jobsdb_link\}/,jobs_link)

  // console.log(temp)

  fs.writeFileSync(email_md_path,temp,{encoding:'utf-8'})
}

module.exports={
  updateApplicationLetter
}
