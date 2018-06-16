/* eslint-env mocha */

const { expect } = require('chai');

const { disassemble } = require('./disassembler');

describe("disassembler", () => {
    describe("disassemble", () => {
        it("returns the correct OP Code objects", () => {
            const b = Buffer.from([0x00, 0x01, 0x02, 0x03]);
            const instructions = disassemble(b).map(i => i.name);

            expect(instructions).to.be.deep.equal([ "NOP", "LXI B,D16", "STAX B", "INX B" ]);
        })
    })
})

