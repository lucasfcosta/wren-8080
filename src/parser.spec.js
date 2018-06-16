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
                    { name: "MVI H,D8", size: 2, arg1: 0x10 },
                    { name: "MVI C,D8", size: 2, arg1: 0xf1 },
                    { name: "MVI D,D8", size: 2, arg1: 0xc3 },
                ];

                const expected = ([
                    "000000 MVI H,D8, 0x10",
                    "000002 MVI C,D8, 0xf1",
                    "000004 MVI D,D8, 0xc3"
                ]).join('\n');

                expect(toPlainText(input)).to.be.equal(expected);
            });
        });

        describe('when there are two arguments', () => {
            it("returns a string with names and the arguments", () => {
                const input = [
                    { name: "LXI SP,D16", size: 3, arg1: 0xc1, arg2: 0xf1 },
                    { name: "MVI M,D8", size: 3, arg1: 0xc2, arg2: 0xf2 },
                    { name: "LXI H,D16", size: 3, arg1: 0xc3, arg2: 0xf3 },
                ];

                const expected = ([
                    "000000 LXI SP,D16, 0xc1, 0xf1",
                    "000003 MVI M,D8, 0xc2, 0xf2",
                    "000006 LXI H,D16, 0xc3, 0xf3"
                ]).join('\n');

                expect(toPlainText(input)).to.be.equal(expected);
            });
        });

    });
});

