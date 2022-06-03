import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, '/files');

export const list = async () => {
  const ensureExists = async (dir) => {
    return new Promise((resolve, reject) => {
      fs.access(dir, (err) => {
        if (err) reject(new Error('FS operation failed'));
        resolve(true);
      });
    })
  }

  ensureExists(dir)
  .then(() => {
    fs.readdir(dir, (err, files) => {
      if (err) throw err;
      console.log(files);
    })
  })  
  .catch((err) => { throw err })
};
