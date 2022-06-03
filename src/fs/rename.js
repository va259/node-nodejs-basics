import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wrongFilename = path.join(__dirname, '/files', 'wrongFilename.txt');
const properFilename = path.join(__dirname, '/files', 'properFilename.md');

export const rename = async () => {
  const ensureExists = async (file) => {
    return new Promise((resolve, reject) => {
      fs.access(file, fs.constants.F_OK, (err) => {
        if (err) reject(new Error('FS operation failed'));
        resolve(true);
      });
    })
  }

  const ensureDoesntExist = async (file) => {
    return new Promise( (resolve, reject) => {
      fs.access(file, fs.constants.F_OK, (err) => {
        if (!err) {
          reject(new Error('FS operation failed'))
        } else {
          resolve(true);
        };
      })
    })
  }

  ensureExists(wrongFilename)
  .then(() => {
    ensureDoesntExist(properFilename)
    .then(() => {
      fs.rename(wrongFilename, properFilename, (err) => {
        if (err) throw err;
        console.log('File was renamed');
      })
    })
    .catch((err) => { throw err })
  })
  .catch((err) => { throw err })
};
