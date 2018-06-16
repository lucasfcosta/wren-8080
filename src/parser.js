const toPlainText = (iArr) => {
    let offset = 0;

    return iArr.map(( { name, size, arg1, arg2 }) => {
        const hexArgs = [arg1, arg2].filter(v => v !== undefined).map(v => `0x${v.toString(16)}`);
        const content = [name]
            .concat(hexArgs)
            .join(', ');
        const line = `${String(offset).padStart(6, 0)} ${content}`;
        offset += size;
        return line;
    }).join('\n');
};

module.exports = { toPlainText };
