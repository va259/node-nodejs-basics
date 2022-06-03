import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, '/files');
const destDir = path.join(__dirname, '/files_copy');

export const copy = async () => {
  const ensureExists = async (dir) => {
    return new Promise((resolve, reject) => {
      fs.access(dir, (err) => {
        if (err) reject(new Error('FS operation failed'));
        resolve(true);
      });
    })
  }

  ensureExists(srcDir)
  .then( () => {
    fs.cp(srcDir, destDir, {errorOnExist: true, force: false, recursive: true}, 
      (err) => {
        if (err) throw new Error('FS operation failed');
    })
  })
  .catch((err) => { throw err })
};
