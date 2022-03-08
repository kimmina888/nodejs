var result = 0;

console.time("duration_sum");

console.time("duration_sum");

for(var i = 1; i <= 1000; i++){
    result += i;
}

console.timeEnd("duration_sum");
console.log("1부터 1000까지 더한 겨로가물 : %d",result);
// crtl c node (console)모드에서 빠져나오기
console.log('argv 속성의 파라미터 수  : '+process.argv.length);
console.dir(process.argv);

if(process.argv.length>2){
    console.log('세번째 파라미터 값 : %s',process.argv[2]);

process.argv.array.forEach((Item, Index) => {
    console.log(Index+":",Item);
});
}