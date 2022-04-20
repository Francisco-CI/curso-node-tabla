
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        describe: 'lista archivo',
        default: false
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        describe: 'lista hasta el valor indicado',
        default: 15
    })
    .check( (argv, options) => {
        if( isNaN(argv.b) ) {
            throw new Error('La base debe ser numero');
        }
        return true;
    })
    .argv;

module.exports = argv;