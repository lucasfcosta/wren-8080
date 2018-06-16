/* eslint-env mocha */

const { expect } = require('chai');

const { decode } = require('./decoder');

describe("decoder", () => {
    describe("decode", () => {
        it("throws an error for unknown OP Codes", () => {
            expect(() => decode(0xfff)).to.throw()
        })
    })
})
