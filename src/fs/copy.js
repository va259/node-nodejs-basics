import fsPromises from 'node:fs/promises';
import path from 'node:path'; 
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, '/files');
const destDir = path.join(__dirname, '/files_copy');

export const copy = async () => {
  const ensureExists = async (dir) => {
    return new Promise((resolve, reject) => {
      fsPromises.access(dir)
      .then(() => resolve(true))
      .catch(() => reject("FS operation failed"))
    })
  }

  ensureExists(srcDir)
  .then( () => {
    fsPromises.cp(srcDir, destDir, {errorOnExist: true, force: false,
      recursive: true}).catch(
        () => console.error("FS operation failed")
      )
  })
  .catch( (err) => console.error(err) )
};
