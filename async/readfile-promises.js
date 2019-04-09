const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function main() {
  let data = await readFile('./source.txt', 'utf-8');
  await writeFile('./target.txt', data);
  console.log('done with file copy.')
}

main();

console.log('More work....');

var func = () =>{
  return new Promise
}