import path from 'node:path'; 
import { fileURLToPath } from 'url';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';
import { createWriteStream, createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const archive = createReadStream(path.join(__dirname, 'files', 'archive.gz'));
const file = createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
const unzip = zlib.createUnzip();

export const decompress = async () => {
  pipeline(archive, unzip, file, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

decompress();
