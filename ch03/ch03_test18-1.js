function Pesron(name ,age){
    this.name = name;
    this.age = age;
}

Pesron.prototype.doit = function(doing){
    console.log(doing + "을 하는 중입니다..\n");
}
Pesron.prototype.play = function(doing){
    console.log( doing + "을/를 하고 있습니다.\n");
}
Pesron.prototype.goto = (name) => {
    console.log(name+"으로 가고 있습니다.\n");
}
var person1 = new Pesron('3202 김미나',20);
var person2 = new Pesron('school',22);
var person3 = new Pesron('home',23);

console.log(person1.name+"객체의 doit('과제')을 호출합니다.");
person1.doit('과제');
console.log(person2.name+"객체의 goto('미림여자정보고')을 호출합니다.");
person1.goto('미림여자정보과학고');
console.log(person3.name+'객체의 play("game")를 호출합니다.');
person3.play("game");

