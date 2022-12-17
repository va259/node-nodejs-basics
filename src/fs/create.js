import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'files', 'fresh.txt');
const data = 'I am fresh and young';

export const create = async () => {
  fs.writeFile(file, data, { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed');
  })
}

create();
