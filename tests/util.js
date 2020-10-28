const chalk = require('chalk')

function cosnoleLogHighlight(text_input){
  console.log(chalk.green(`${text_input}`))
}

function consoleLogWarn(text_input){
  console.warn(chalk.yellow(`WARN: ${text_input}`))
}

function consoleLogError(text){
  console.error(chalk.red(`ERROR: ${text}`))
}


module.exports={
  consoleLogWarn,
  consoleLogError,
  cosnoleLogHighlight
}