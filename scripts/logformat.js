const chalk = require('chalk')

const LogFormat = {
	errorHeader: chalk.bold.red,
	errorBody: chalk.red,
	warningHeader: chalk.bold.yellow,
	warningBody: chalk.yellow,
    successHeader: chalk.bold.green,
    successBody: chalk.green
}

module.exports = LogFormat
