// function fn(a: any): any {
//     return a;
// }


function fn<T>(a: T): T {
    return a;
}

// 自动推断类型
let res1 = fn(10);

// 显式指定类型
let res2 = fn<string>("hello");

// 可以有多个泛型类型
function fn2<T, L>(a: T, b: L): T {
    return a;
}

fn2(123, "hello");
fn2<number, boolean>(10, false);

interface Inter {
    length: number;

}

// 泛型T必须是Inter的实现类
function fn3<T extends Inter>(a: T): number {
    return a.length;
}

fn3({length: 10});


class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass(123);
const mc2 = new MyClass<string>("123");








