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

                const expected = ([ "NOP", "RRC", "STAX D" ]).join('\n');

                expect(toPlainText(input)).to.be.equal(expected);
            });
        });
    });
});

