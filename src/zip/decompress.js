import path from 'node:path'; 
import { fileURLToPath } from 'url';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';
import { createWriteStream, createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompress = path.join(__dirname, path.sep, 'files', 'fileToCompress.txt');
const archive = path.join(__dirname, path.sep, 'files', 'archive.gz');

const srcFile = createReadStream(archive);
const destFile = createWriteStream(fileToCompress);
const unzip = zlib.createUnzip();

export const decompress = async () => {
  pipeline(srcFile, unzip, destFile, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

decompress();
