(function(){
    class Animal{
        name: string;
        constructor(name: string){
            this.name = name;
        }

        hello() {
            console.log('hello')
        }
    }

    class Dog extends Animal{
        age: number;

        constructor(name: string, age: number) {
            super(name); // 调用父类的构造函数
            this.age = age;
        }

        hello() {
            // super表示父类
            //super.hello();
            console.log(`${this.name} wang!`);
        }
    }

    const dog = new Dog('cdd',1);
    dog.hello();

})()












