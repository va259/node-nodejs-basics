import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRead = path.join(__dirname, '/files', 'fileToRead.txt');

export const read = async () => {
  const ensureExists = async (file) => {
    return new Promise((resolve, reject) => {
      fs.access(file, fs.constants.F_OK, (err) => {
        if (err) reject(new Error('FS operation failed'));
        resolve(true);
      });
    })
  }

  ensureExists(fileToRead)
  .then(() => {
    fs.readFile(fileToRead, 'utf8', (err, file) => {
      if (err) {throw err};
      console.log(file);
    })
  })
  .catch((err) => {throw err})
};
