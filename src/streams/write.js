import path from 'node:path'; 
import { fileURLToPath } from 'url';
import { createWriteStream } from "node:fs";
import { stdin } from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, 'files', 'fileToWrite.txt');

const readableFromTerminal = stdin;
const writeableToFile = createWriteStream(fileToWrite, 'utf-8');

export const write = async () => {
    readableFromTerminal.on('data', (chunk) => {
      const chunkStringified = chunk.toString();
      if (chunkStringified.match('stop')) readableFromTerminal.unpipe(writeableToFile);
      return;
    })
    
    readableFromTerminal.pipe(writeableToFile);
};

write();
