(function(){
    // 抽象类不能用来创建对象，专门用来被继承
    // 抽象类中可以有抽象方法
    abstract class Animal{
        name: string;

        constructor(name: string){
            this.name = name;
        }

        // 抽象方法：没有具体实现，只能定义在抽象类中，子类必须重写
        abstract hello(): void;
    }

    class Dog extends Animal {
        hello() {
            console.log(`${this.name} wang!`);
        }
    }

    const dog = new Dog('cdd');
    dog.hello();

})()












