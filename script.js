/*Menghitung karakter

// input			// output
"hello"   			// { h: 1, e: 1, l: 2, o: 1 }
"aabbbcc"			// { a: 2, b: 3, c: 2 }*/

/*let input = ["hello"];
let output=input.length;
console.log(output)*/

//let input = ["hello"];
//console.log=(str.strim().length);

const str="hello"
const myArr=str.split(``);
console.log(myArr)

const str2="aabbbcc"
const myArr2=str.split(``);
console.log (myArr2);

myArr.forEach((item, index) => {
    console.log(item,index)
})

myArr2.forEach((item, index)=>{
console.log(item, index)
})