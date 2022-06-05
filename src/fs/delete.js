import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

export const remove = async () => {
  fs.rm(fileToRemove, (err) => {
    if (err && err.code === 'ENOENT') throw new Error('FS operation failed')
    else if (err) throw err;
    console.log(`${fileToRemove} was deleted`);
  })
};

remove();
