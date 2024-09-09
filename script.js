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

const jmlhItems={};


myArr.forEach (huruf=>{
    if (jmlhItems[huruf]){
        jmlhItems[huruf]++;
    }else{
        jmlhItems[huruf]=1;
    }
});
console.log(jmlhItems)

const str2= "aabbbcc"
const myArr2=str2.split(``);
const jmlhItems2 ={};
console.log (myArr2);
myArr2.forEach (huruf2=>{
    if(jmlhItems2[huruf2]){
        jmlhItems2[huruf2]++;
    }else{
        jmlhItems2[huruf2]=1;
    }
})
console.log(jmlhItems2)