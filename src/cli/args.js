export const parseArgs = () => {
  const args = process.argv.slice(2);
  const strOfArgs = args
    .map((el, i) => { if (i % 2 === 0) return `${el} is ${args[i + 1]}` })
    .filter((el) => { return el != null })
    .join(', ');

  console.log(strOfArgs);
};

parseArgs();
