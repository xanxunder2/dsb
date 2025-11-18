const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellowBright('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF").bold(`${option} » `, (chalk.bold.hex("#00ffba").bold(data))));
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#e5ff04").bold('[ XANVIR ] » ', (chalk.bold.hex("#00fc34").bold(data))));
			break;
    case "error":
			console.log(chalk.bold.hex("#ff2121").bold('[ XANVIR ] » ', (chalk.bold.hex("#ff2121").bold(data))));
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF").bold('[ XANVIR ] » ', (chalk.bold.hex("#00fc34").bold(data))));
			break;
	}
}
