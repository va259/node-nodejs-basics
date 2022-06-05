import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const wrongFilename = path.join(__dirname, 'files', 'wrongFilename.txt');
const properFilename = path.join(__dirname, 'files', 'properFilename.md');
const errorMessage = 'FS operation failed';

export const rename = async () => {
  const ensureDoesNotExist = async (file) => {
    return new Promise( (resolve, reject) => {
      fs.access(file, fs.constants.F_OK, (err) => {
        if (!err) { reject(new Error(errorMessage)) }
        else { resolve(true) };
      })
    })
  }
  
  ensureDoesNotExist(properFilename)
  .then(() => {
    fs.rename(wrongFilename, properFilename, (err) => {
      if (err && err.code === 'ENOENT') { throw new Error(errorMessage) }
      else if (err) { throw err }
      console.log('File was renamed');
    })
  })
  .catch((err) => { throw err })
};

rename();
