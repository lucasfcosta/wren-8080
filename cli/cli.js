#!/usr/bin/env node

const util = require('util');
const fs = require('fs');
const dedupe = require('dedupe');
const jsonexport = require('jsonexport');
const program = require('commander');

const toPlainText = (arr) => arr.map(i => i.name).join('\n');
const toCsv = util.promisify(jsonexport);
const writeFile = util.promisify(fs.writeFile);

const { disassembleFile } = require('../src/disassembler');

program
    .usage('[path] [options]')
    .option('-d, --dedupe', 'Does not output duplicate instructions')
    .option('-c, --csv <outputPath>', 'Save the results to a csv file')
    .option('-t, --txt <outputPath>', 'Save the results to a text file');

const main = async (path) => {
    const instructions = await disassembleFile(path);
    await output(program.dedupe ? dedupe(instructions) : instructions);
    console.log('Done!'); // eslint-disable-line no-console
};

const output = async (instructions) => {
    if (program.csv) {
        return writeFile(program.csv, (await toCsv(instructions)));
    } else if (program.txt) {
        return writeFile(program.txt, (await toPlainText(instructions)));
    }

    console.log(toPlainText(instructions)); // eslint-disable-line no-console
};

program.action(main);

program.parse(process.argv);
