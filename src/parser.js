const toPlainText = (iArr) => iArr.map(( { name, arg1, arg2 }) => {
    return [name, arg1, arg2].filter((v) => v !== undefined).join(', ');
}).join('\n');

module.exports = { toPlainText };
