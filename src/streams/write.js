import { createWriteStream } from "node:fs";
import { stdin } from 'node:process';

const readableFromTerminal = stdin;
const writeableToFile = createWriteStream('./files/fileToWrite.txt', 'utf-8');

readableFromTerminal.pipe(writeableToFile);

export const write = async () => {
    readableFromTerminal.on('data', (chunk) => {
      const chunkStringified = chunk.toString();
      if (chunkStringified.match('STOP')) readableFromTerminal.unpipe(writeableToFile);
      return;
    })
};
