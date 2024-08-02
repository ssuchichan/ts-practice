class Dog {
    name: string;
    age: number;

    // 构造函数，对象创建时调用
    constructor(name: string, age: number) {
        console.log("Dog constructor");
        this.name = name;
        this.age = age;
    }

    bark() {
        console.log(this.name);
    }
}


const dog = new Dog("xiaohei", 1);
const dog2 = new Dog("xiaobai",2);
dog.bark();
dog2.bark();






