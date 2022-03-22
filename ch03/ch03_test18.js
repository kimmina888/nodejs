function Pesron(name ,age){
    this.name = name;
    this.age = age;
}

Pesron.prototype.walk = function(speed){
    console.log(speed + "km 속도로 걸어갑니다.");
}
var person1 = new Pesron('소녀시대',20);
var person2 = new Pesron('걸스데이',22);

console.log(person1.name+"객체의 walk(10)을 호출합니다.");
person1.walk(10);
