import { createReadStream } from "node:fs";
import { stdout } from 'node:process';

const readableFromFile = createReadStream('./files/fileToRead.txt', 'utf-8');
const writeableToTerminal = stdout;

readableFromFile.pipe(writeableToTerminal);

export const read = async () => {
  readableFromFile.on('data', chunk => {
      return;
    })
};
