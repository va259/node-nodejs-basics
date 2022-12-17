import { readdir } from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dir = path.join(__dirname, 'files');

export const list = async () => {
    readdir(dir, (err, files) => {
      if (err && err.code === 'ENOENT') throw new Error('FS operation failed')
      else if (err) throw err ;
      console.log(files);
    })
};

list();
