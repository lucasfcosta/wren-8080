/* eslint-env mocha */

const { expect } = require('chai');

const { disassemble } = require('./disassembler');

describe("disassembler", () => {
    describe("disassemble", () => {
        it("returns the correct OP Codes, sizes and arguments", () => {
            const b = Buffer.from([0x00, 0x01, 0xff, 0x0f]);
            const instructions = disassemble(b);
            expect(instructions).to.be.deep.equal([
                { name: "NOP", size: 1 },
                { name: "LXI B,D16", size: 3, arg0: 0x0f, arg1: 0xff }
            ]);
        });
    });
});

