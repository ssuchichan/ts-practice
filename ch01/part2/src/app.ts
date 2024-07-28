// print
console.log("app");
let a = 10;


function fn(a: number, b: number) {
    return a + b;
}

function fn2(this: any) {
    alert(this);
}

let box1 = document.getElementById("box1");
// if (box1 !== null) {
//     box1.addEventListener("click", function (){
//         alert("hello");
//     })
// }
box1?.addEventListener("click", function (){
    alert("hello");
})


