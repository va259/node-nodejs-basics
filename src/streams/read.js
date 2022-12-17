import path from 'node:path'; 
import { fileURLToPath } from 'url';
import { createReadStream } from "node:fs";
import { stdout } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
const readableFromFile = createReadStream(fileToRead, 'utf-8');
const writeableToTerminal = stdout;

export const read = async () => {
  readableFromFile.on('data', chunk => {
    return chunk;
  })

  readableFromFile.pipe(writeableToTerminal);
};

read();
