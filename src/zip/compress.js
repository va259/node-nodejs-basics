import path from 'node:path'; 
import { fileURLToPath } from 'url';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';
import { createWriteStream, createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
const archive = createWriteStream(path.join(__dirname, 'files', 'archive.gz'));
const gzip = zlib.createGzip();

export const compress = async () => {
  pipeline(file, gzip, archive, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

compress();
