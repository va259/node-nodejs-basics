import {unknownObject, createMyServer} from './cjsToEsm.mjs'

console.log(unknownObject);
createMyServer.listen(3000, 'localhost', () => {
  console.log('port 3000')
})
