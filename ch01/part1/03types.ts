let a: 10; // 字面量
a = 10;
// a = 11; //ERROR

// 用|连接多个类型（联合类型）
let b: 'male' | 'female';
b = 'male';
b = 'female';

let c: boolean | string;
c = true;
c = 'hello';

// any表示任意类型，一个变量设置类型为any时，相当于对该变量关闭了TS的类型检查
// 使用TS时，不建议使用
// 声明变量不指定类型，TS解析器会自动判断变量的类型为any（隐式的any）
let d :any;
d = 10;
d = 'hello';
d = true;

// unknown表示未知类型
let e: unknown;
e = 10;
e = 'hello';
e = true;

let s: string;
// d是any类型，可以赋值给任意变量
s = d;

e = 'hello';
// unknown实际上是一个类型安全的any，unknown类型的变量，不能直接赋值给其他的变量
if (typeof e === 'string') {
    s = e;
}
// 类型断言，告诉解析器变量的实际类型
s = e as string;
s = <string>e;

// void表示空，以函数为例，就表示没有返回值
function fn(): void {}

// never表示永远不会返回结果
function fn2(): never {
    throw new Error('error');
}



