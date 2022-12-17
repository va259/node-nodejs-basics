import { Worker, isMainThread, parentPort } from 'node:worker_threads';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', (msg) => { console.log(nthFibonacci(msg)); });
  } else {
    parentPort.postMessage('8');
  }
};

sendResult();
