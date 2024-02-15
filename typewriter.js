const sentence = "hello there from lighthouse labs"
let answerArr = [];
for(const char of sentence){
  answerArr.push(char);
}
answerArr.forEach((letter, index) =>{
  setTimeout(() =>{
    process.stdout.write(letter);
  }, index * 50);
})
setTimeout(() => {
  process.stdout.write('\n')
}, sentence.length * 50);

