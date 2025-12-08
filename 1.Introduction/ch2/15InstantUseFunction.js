let a = 2;

(function IIFE(){
    a += 3;
    return a
    }
    )();

console.log(a);
//   (function IIFE(){ codeHere } )();