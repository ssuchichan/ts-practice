let a: object;
a = {};
a = function(){};

// {}用来指定对象中可以包含哪些属性
// 属性名后加上?表示属性是可选的
let b: {name: string, age: number, score?: number};
b = {age: 18, name: 'gogo'};


let c: {name:string, [propName: string]: any};
c = {name: 'cdd', age: 18, gender: 'female'};


let d: (a: number, b: number) => number;
d = function(n1, n2) {
    return n1 + n2;
}

// 数组：类型[]、Array<类型>
let e: string[];
e = ['a', 'b', 'c'];

let f: number[];
f = [1, 2, 3];

let g: Array<number>;
g = [1, 2, 3];

// 元组：固定长度的数组，元素可以是不同类型
let h: [string, boolean, number];
h = ['hello', true, 123];


enum Gender{
    Male,
    Female
}

let i :{name: string, gender: Gender};
i = {name: 'cdd', gender: Gender.Female};
console.log(i.gender === Gender.Female);

// &表示同时
let j: {name: string} & {age: number};
j = {name:'cdd', age: 18};

//类型别名
type myType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
let k: myType;
k = 9;
k = 8;






