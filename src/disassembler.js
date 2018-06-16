const fs = require('fs');
const { promisify } = require('util');

const { decode } = require('./decoder');

const readFile = async (path) => await promisify(fs.readFile)(path);

const disassembleFile = async (path) => {
    const content = await readFile(path);
    return disassemble(content);
};

const disassemble = (buf) => {
    const instructions = [];
    let offset = 0;
    while (offset < buf.length) {
        const instruction = decode(buf.readUInt8(offset));
        offset += instruction.size;
        instructions.push(instruction);
    }
    return instructions;
};

module.exports = {
    disassemble,
    disassembleFile
};
