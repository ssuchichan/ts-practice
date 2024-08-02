(function(){
    class Animal{
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name=name;
            this.age=age;
        }

        say() {
            console.log("animal");
        }
    }

    // Dog类继承Animal类
    class Dog extends Animal {
        run() {
            console.log(`${this.name} is running`);
        }
        // 子类中覆盖父类的方法
        say() {
            console.log('wang!');
        }
    }

    const dog = new Dog("xiaohei", 1);
    dog.say();
    dog.run();

    // Dog类继承Animal类
    class Cat extends Animal {
        say() {
            console.log('miao!');
        }
    }
    const cat = new Cat("daju", 1);
    cat.say();


})()






