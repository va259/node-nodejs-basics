import path from 'node:path';
import { fileURLToPath } from 'url';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from "node:http";
import { createRequire } from 'node:module'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);
const a = require(path.join(__dirname, 'files', 'a.json'));
const b = require(path.join(__dirname, 'files', 'b.json'));

const random = Math.random();
let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {unknownObject, createMyServer};
