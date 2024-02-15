let arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|']
arr.forEach((symbol, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}`);
  }, index * 175);
});
setTimeout(() => {
  process.stdout.write('\n');
}, arr.length * 200);