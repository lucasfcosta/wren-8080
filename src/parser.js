const toPlainText = (iArr) => iArr.map(( { name, arg1, arg2 }) => {
    const hexArgs = [arg1, arg2].filter(v => v !== undefined).map(v => `0x${v.toString(16)}`);
    return [name]
        .concat(hexArgs)
        .join(', ');
}).map((str, i) => `${String(i).padStart(6, 0)} ${str}`).join('\n');

module.exports = { toPlainText };
