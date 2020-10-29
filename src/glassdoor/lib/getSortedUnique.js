
function getSortedUnique(a_in){
  return a_in.reduce( (a,x) => a.includes(x)? a: [...a, x], [] ).sort()
}

module.exports={
  getSortedUnique
}