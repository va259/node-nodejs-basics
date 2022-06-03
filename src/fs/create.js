import fs from 'node:fs';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '/files', 'fresh.txt');
const fileData = 'I am fresh and young';

export const create = async () => {
  fs.writeFile(filePath, fileData, { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed');
  })
}
