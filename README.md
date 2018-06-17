# wren-8080

An Intel 8080 disassembler. Named after [Sir Christopher Wren](https://pt.wikipedia.org/wiki/Christopher_Wren) 🇬🇧.


## CLI Usage

Install this package:

```console
$ npm install -g wren-8080
```

In order to disassemble a file use the command:

```console
$ wren-8080 [path] [options]
```

### Options:

| Short-form | Long-form | Description                             |
|------------|-----------|-----------------------------------------|
| -d         | --dedupe  | Does not output duplicate instructions  |
| -c         | --csv     | Save the results to a csv file          |
| -t         | --txt     | Save the results to a text file         |
| -h         | --help    | Output usage information                |


## Programmatic Usage

### Decoding an OP Code

```js
const { decode } = require('wren-8080');
decode(0x01); // { name: "STAX B", size: "1" }
```

### Disassembling a file

```js
const { disassembleFile } = require('wren-8080');

disassembleFile('./myFile.rom'); // [{ name: "LXI D, D16", size: "1", arg0: 0xff, arg1: 0x1c }, { name: "NOP", size: "1" }]
```

### Disassembling a Buffer

```js
const { readFile } = require('fs');
const { disassemble } = require('wren-8080');

readFile('./myFile.rom', (err, buffer) => {
    if (err) throw e;
    disassemble(buffer); // [{ name: "LXI D, D16", size: "1", arg0: 0xff, arg1: 0x1c }, { name: "NOP", size: "1" }]
});
```


## License

Feel free to use it in any way you want to. I don't like copyright.

![The internet was made for everyone](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Copyleft.svg/444px-Copyleft.svg.png)
