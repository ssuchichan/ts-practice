class Person {
    // 实例属性，需要通过对象访问
    name: string = 'cdd';

    // 静态属性，直接通过类访问，也不能通过对象访问
    static age: number = 18;

    // 只读属性，不能修改
    readonly score: number = 60;

    // 静态只读属性
    static readonly weight: number = 70;

    // 实例方法
    hello(){
        console.log('hello');
    }

    // 静态方法
    static hi() {
        console.log('hi');
    }
}

const per = new Person();

console.log(per.name);
console.log(Person.age);

per.name = 'bdd';
console.log(per.name);

per.hello();
Person.hi();




