import { stdin, stdout } from 'node:process';
import { Transform, pipeline } from 'node:stream';  

const readable = stdin;
const writeable = stdout;

export const transform = async () => {
  const transformed = new Transform({
    transform(chunk, enc, cb) {
      const chunkStringified = chunk.toString().trim();
      const reversedChunk = chunkStringified.split('').reverse().join('');
      cb(null, reversedChunk + '\n');
    }
  });

  pipeline(
    readable,
    transformed,
    writeable,
    err => { throw err }
  );
};
