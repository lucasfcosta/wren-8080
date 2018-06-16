const toPlainText = (iArr, opOnly) => {
    let offset = 0;

    return iArr.map(( { name, size, arg1, arg2 }) => {
        const hexArgs = [arg1, arg2].filter(v => v !== undefined).map(v => `0x${v.toString(16)}`);
        const content = opOnly ? name : [name].concat(hexArgs).join(', ');
        const offsetStr = String(offset).padStart(6, 0);
        const line = opOnly ? content : [offsetStr, content].join(' ');
        offset += size;
        return line;
    }).join('\n');
};

module.exports = { toPlainText };
