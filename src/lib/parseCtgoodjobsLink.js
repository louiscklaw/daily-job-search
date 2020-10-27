
function getId(ctgoodjob_link){
  return ctgoodjob_link.split('/')[3]
}

function getPosition(ctgoodjob_link){
  return ctgoodjob_link.split('/')[2]
}

function parseCtgoodjobsLink(ctgoodjob_link){
  var temp = ctgoodjob_link.match(/href="(.+?)"/)[1]
  return {
    position: getPosition(temp),
    id: getId(temp)
  }
}


module.exports={
  parseCtgoodjobsLink
}