(function (){
    // 定义一个类应该包含哪些属性和方法
    // 同时也是类型声明
    interface MyInterface {
        name: string;
        age: number;
    }

    interface MyInterface {
        gender: string,
    }

    const mi: MyInterface = {name: "cdd", age: 18, gender: "male"};

    // 接口中的所有属性都不能有实际的值，只定义结构
    interface Animal {
        name: string;
        age: number;

        hello(): void;
    }

    class Dog implements Animal {
        age: number;
        name: string;

        constructor(name: string, age: number) {
            this.name=name;
            this.age=age;
        }

        hello() {
            console.log("wang!");
        }
    }

    const dog = new Dog("wangdefa", 1);

})();

























