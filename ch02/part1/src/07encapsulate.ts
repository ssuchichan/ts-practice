(function (){
    class Person {
        /*
        * public：可以在任意位置访问（缺省）
        * private：只能在类内部访问
        * protected：只能在当前类和子类中访问
        * */
        private _name: string;
        private _age: number;

        constructor(name: string, age: number){
            this._name = name;
            this._age = age;
        }

        // TS中getter和setter的设置方式
        get name() {
            return this._name;
        }

        set name(name: string) {
            this._name = name;
        }

        get age() {
            return this._age;
        }

        set age(age: number) {
            if (age >= 0) {
                this._age = age;
            }
        }

        // getName() {
        //     return this.name;
        // }
        //
        // getAge() {
        //     return this.age;
        // }
        //
        // setName(name: string) {
        //     this.name = name;
        // }
        //
        // setAge(age: number) {
        //     if (age >= 0) {
        //         this.age = age;
        //     }
        // }
    }


    const p = new Person("bdd", 18);
    // p.setName("cdd");
    // p.setAge(20);
    // console.log(p.getName());
    // console.log(p.getAge());
    console.log(p.name);
    p.age = 20;
    console.log(p.age);


    class A {
        protected num: number;

        constructor(num: number) {
            this.num = num;
        }
    }

    class B extends A {
        test() {
            console.log(this.num);
        }
    }

    // 简化写法
    class C {
        constructor(public name: string, public age: number) {}
    }

    const c = new C("add", 10);
    console.log(c);

})()