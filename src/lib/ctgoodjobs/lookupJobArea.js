
const { ERROR_CANNOT_LOOKUP_CATEGORY_ID }= require('../errors')
const { consoleLogError } = require('../../util')

const CATEGORY_NOT_EXIST = 'not exist'
var dict_job_area_id = {
  'all-information-technology': '021_jc'
}

function lookupCategoryId(){
  return 'helloworld'
}

function lookupJobArea(category_in){
  if (Object.keys(dict_job_area_id).includes(category_in)){
    return dict_job_area_id[category_in]
  }else{
    consoleLogError(`cannot lookup category id of ${category_in}`)
    throw ERROR_CANNOT_LOOKUP_CATEGORY_ID
    return CATEGORY_NOT_EXIST
  }
  return
}

module.exports={
  lookupCategoryId,
  lookupJobArea,
  CATEGORY_NOT_EXIST
}