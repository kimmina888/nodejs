console.log("안녕하세요");
console.log("반가워요");
console.log("고마워요");
console.log('argv 속성의 파라미터 수 : '+ Process.argv.length);
console.dir(Process.argv);
Process.argv.array.forEach((item, index) => {
    console.log(index+" : ",item);
});