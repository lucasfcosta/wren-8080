const { decode } = require('./src/decoder');
const {
    disassemble,
    disassembleFile
} = require('./src/disassembler');

module.exports = {
    decode,
    disassemble,
    disassembleFile
};
