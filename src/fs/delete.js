import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.join(__dirname, '/files', 'fileToRemove.txt');

export const remove = async () => {
  const ensureExists = async (file) => {
    return new Promise((resolve, reject) => {
      fs.access(file, fs.constants.F_OK, (err) => {
        if (err) reject(new Error('FS operation failed'));
        resolve(file);
      });
    })
  }

  ensureExists(fileToRemove)
  .then(() => {
    fs.rm(fileToRemove, (err) => {
      if (err) throw new Error('FS operation failed');
    })
  })
  .catch((err) => { throw err })
};
