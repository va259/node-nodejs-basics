import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToRemove = path.join(__dirname, '/files', 'fileToRemove.txt');

export const remove = async () => {
  const ensureExists = async (file) => {
    return new Promise( (resolve, reject) => {
      fsPromises.access(file, fs.constants.F_OK)
      .then(() => resolve(true) )
      .catch(() => reject('FS operation failed') )
    })
  }

  ensureExists(fileToRemove)
  .then(() => {
    fs.rm(fileToRemove, (err) => {
      if (err) throw err;
    })
  })
  .catch((err) => { throw err })
};
