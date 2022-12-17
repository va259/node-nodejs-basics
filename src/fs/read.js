import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

export const read = async () => {
  fs.readFile(fileToRead, 'utf8', (err, file) => {
    if (err && err.code === 'ENOENT') throw new Error('FS operation failed')
    else if (err) throw err;
    console.log(file);
  })
};

read();
