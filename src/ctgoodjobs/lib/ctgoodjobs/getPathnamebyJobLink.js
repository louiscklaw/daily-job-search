function getFilename( position, id ) {
  return `${position}_${id}`
}

function getPathnamebyJobLink( job_link ) {
  var splitted = job_link.split('/')
  var position = splitted[4]
  var id = splitted[5]
  return `ctgoodjobs_${position}_${id}`
}

module.exports = {
  getPathnamebyJobLink
}
