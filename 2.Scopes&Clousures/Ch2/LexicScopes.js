
// ~~firstScope or Global Scope~~

function secondScope(a){
    let b = a * 3

    function thirdScope(c){
        console.log(a,b,c) //3, 9, 27
    }

    thirdScope(b * 3)
}

secondScope(3)
