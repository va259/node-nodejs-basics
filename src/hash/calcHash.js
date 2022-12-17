import { createHash } from 'node:crypto';
import { readFile } from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  const readData = async (file) => {
    return new Promise((resolve, reject) => {
      readFile(file, 'utf8', (err, data) => {
        if (err) reject(new Error(err));
        resolve(data);
      });
    })
  }

  readData(file)
  .then((data) => {
    const hash = createHash('sha256')
      .update(data)
      .digest('hex');
    console.log(hash);
    return hash;
  })
  .catch((err) => {throw err})
};

calculateHash();
