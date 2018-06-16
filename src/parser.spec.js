/* eslint-env mocha */

const { expect } = require('chai');

const { toPlainText } = require('./parser');

describe("parser", () => {
    describe("toPlainText", () => {
        describe('when there are no arguments', () => {
            it("returns a string with names only", () => {
                const input = [
                    { name: "NOP", size: 1 },
                    { name: "RRC", size: 1 },
                    { name: "STAX D", size: 1 },
                ];

                const expected = ([ "000000 NOP", "000001 RRC", "000002 STAX D" ]).join('\n');

                expect(toPlainText(input)).to.be.equal(expected);
            });
        });

        describe('when there is one argument', () => {
            it("returns a string with names and the first arguments only", () => {
                const input = [
                    { name: "INX D", size: 1, arg1: 0x10 },
                    { name: "DCR E", size: 1, arg1: 0xf1 },
                    { name: "DCR H", size: 1, arg1: 0xc3 },
                ];

                const expected = ([
                    "000000 INX D, 0x10",
                    "000001 DCR E, 0xf1",
                    "000002 DCR H, 0xc3"
                ]).join('\n');

                expect(toPlainText(input)).to.be.equal(expected);
            });
        });

    });
});

