/*var data=100;
console.log(data);
output is 100*/
/*let data=200;
{
    console.log(data);
}
var data=400;
output is var data=400*/

/*for (let i=0;i<10;i++){
    console.log(i);
}
output is 
0
1
2
3
4
5
6
7
8
9*/
/*function myFun(){
    var data=100;
    let data1=200;
console.log(data,data1);
};
myFun();
output is 100 200*/

/*const obj={
    pcost:10000
};
console.log (obj);
obj.pcost=20000;
console.log(obj);
obj={} 
console.log(obj);
out put is
PS C:\Surya\vishal\03-12-2019> node index5.js
{ pcost: 10000 }
{ pcost: 20000 }
C:\Surya\vishal\03-12-2019\index5.js:7
obj={}*/

/*console.log(
    [1,2,3,4,5].map((element,index)=>{
    return element*10;
    }))
    out put is 
    [ 10, 20, 30, 40, 50 ]*/

    /*console.log(
        [10,20,30,40,50].map((element,index)=>{
        return element+"$";
        }))
        out put is
        [ '10$', '20$', '30$', '40$', '50$' ]*/
        /*filter()Array
        console.log(
            [10,20,30,40,50].filter((element,index)=>{
            return element>=30;
            }))
            output is 
            [ 30, 40, 50 ] */

            /*console.log(
                [10,20,30,40,50].filter((element,index)=>{
                return element<=40;
                }))
                output is
                [ 10, 20, 30, 40 ] */

/*reduce
console.log(
    [1,2,3,4,5].reduce((value,value2)=>{
    return value+value2;
    }))
    output is
    15*/
    /*reduceRight()
    console.log(
        ["page","first","my","is","this"].reduceRight((value,value2)=>{
        return value+" "+value2;
        }))*/

        /*foreach()

        [10,20,30,40,50,].forEach((element,index)=>{
            console.log(element,index);
            });
            out putis 
        10 0
        20 1
        30 2
        40 3
        50 4*/

        /*for..of()
        for(let value of [1,2,3,4,5]){
            console.log(value);
            };
            output is
            1
            2
            3
            4
            5 */
  /* for..in()
   let obj={
    p_id:111,
    p_name:"p_one",
    p_cost:10000
};
for(let key in obj){
    console.log(key
    )
}   
output is
p_id
p_name
p_cost*/         
   
/*let obj={
    p_id:111,
    p_name:"p_one",
    p_cost:10000,
};
for(let key in obj){
    console.log(key,obj[key]);
}
output is
p_id:111,
p_name:"p_one",
p_cost:10000*/

/*let ary=[10,20,30,40,50,60,70,80,90,100];
console.log(ary) ; 
ary.push(50);
console.log(ary) ;//output is //[ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 50 ]

ary.unshift(5,10);
console.log(ary);*/ //output is //[ 5, 10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
/*ary.pop();      
console.log(ary); // output is //[ 10, 20, 30, 40, 50, 60, 70, 80, 90 ]
ary.shift();
console.log(ary);*/ // out put is //[ 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
/*ary.splice(3,1); to remove the arry
console.log(ary);*/  //output is [ 10, 20, 30, 50, 60, 70, 80, 90, 100 ]
/*ary1.splice(0,0,5); to add arry
console.log(ary1);*/ // out put is [ 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]

/*let ary1=[0,1,2,3,4,5,6,7,8,9,];
ary1.splice(6,2);
console.log(ary1)*/// output is [ 0, 1, 2, 3, 4, 5, 8, 9 ]

/*
let ary1=[0,1,2,3,4,5,6,7,8,9,];
ary1.splice(6,2);  // to remove arry //output is [ 0, 1, 2, 3, 4, 5, 8, 9 ]
console.log(ary1);
ary1.splice(3,2); // to remove arry //out put is [ 0, 1, 2, 5, 8, 9 ]
console.log(ary1);
ary1.splice(3,0,3,4);// to add arry//out put is [ 0, 1, 2, 3, 4, 5, 8, 9 ]
console.log(ary1);
ary1.splice(6,0,6,7);// to add arry // out put is [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(ary1);*/

 //changing arrys places with splice function
/*let ary=[10,20,30,40];
let ary1=[...ary];
ary1 .splice(0,2);
let ary2=[...ary];
ary2.splice(2,2);
let ary3=[...ary1,...ary2];
console.log(ary3);*/ // out put is [ 30, 40, 10, 20 ]

//slice  arry function
/*let arry=[10,20,30,40,50];
console.log(arry.slice(2,4));//out put is [ 30, 40 ]*/

/*let message ='congratulations'
const abbrv = message.slice( 0,7)+'s!'
console.log(abbrv);*/ //out put is congrats!

/*let print=" welcome to nareshit"
const leave= print.slice()+" "+'thank you'
console.log(leave);*/
//slice
/*let arry=[10,20,30,40,50];
console.log(arry.slice(2,4));// out put is [ 30, 40 ]
let arry2=[0,1,2,3,4,5,6,7];
console.log(arry2.slice(0,4));//output is [ 0, 1, 2, 3 ]
let arry3=[10,100,1000,20,200,2000];
console.log(arry3.slice(1,-1));*/ //output is [ 100, 1000, 20, 200 ]

//delete arry function
/*let arry=[10,20,30,40,50];
delete arry[2];
console.log(arry);//out put is [ 10, 20, <1 empty item>, 40, 50 ]*/

//length arry function
/*let arry=[10,20,30,40,50,60,70,80,90];
console.log(arry.length);*/// out put is [9]

/*let arry=[10,20,30,40,50,60,70,80,90];
console.log(arry.length);
arry.length=4;
console.log(arry);//output is [ 10, 20, 30, 40 ]*/
/*console.log(arry[4]);     //output is undefined*/

/*//findIndex() arry function 
let arr=[10,20,30,40,50,60,70,80,90];
let i = arr.findIndex((element,index) =>{
    return element == 30
});
console.log(i);
let j = arr.findIndex((element,index) =>{
    return element == 50
});
console.log(j);

let g= arr.findIndex((element,index)=>{
    return element == 90
});
console.log(g);
let v =arr.findIndex((element,index)=>{
    return element == 80
});
console.log(v);
let f = arr.findIndex((element,index)=>{
    return element==20
});
console.log(f);*/ 

/*//To remove arrys in products wise
let products=[
    {p_id:111},
    {p_id:222},
    {p_id:333},
    {p_id:444},
    {p_id:555},
    {p_id:666},

];
let g = products.findIndex((element,index)=>{
    return element .p_id === 222;
});
console.log(g); //1

products.splice(5);
console.log(products); //output is [ { p_id: 111 },
{ p_id: 222 },
{ p_id: 333 },
{ p_id: 444 },
{ p_id: 555 } ]*/
//slice arry funtion
/*let arry=[10,20,30,40,50,60,70,80,90,100];
console.log(arry.slice(0,7));// out put is [ 10, 20, 30, 40, 50, 60, 70 ]*/
//find index 
/*let arry1=[10,100,1000,20,200,2000];
let i= arry1. findIndex((element,index)=>{
    return element ===20;
});
console.log(i);// output is 3*/
//find index
/*let arry1=[10,100,1000,20,200,2000];
let j= arry1. findIndex((e,i)=>{
    return e ===20;
});
console.log(j);
arry1.splice(j,1);
console.log(arry1);output is [10,100,1000,200,2000]*/
// index of()

/*let arry1=[10,20,30,40,20,10,40,50,10];
let j= arry1.forEach ((e,i)=>{
    console.log(arry1.indexOf(e));
});*/
// index of()

/*let arry1=[10,20,30,40,20,10,40,50,10];
let j= arry1.forEach ((e,i)=>{
    console.log(arry1.indexOf(e));
});*/

// index of()

/*let arry1=[10,20,30,40,20,10,40,50,10];
let j= arry1.forEach ((e,i)=>{
    console.log(arry1.indexOf(e));
});
//output is
0
1
2
3
1
0
3
7
0

// To remove duplicate elements

/*let arry1=[10,20,30,40,20,10,40,50,10];
console.log(arry1.filter ((element,index)=>{
    return arry1.indexOf(element) == index;
})
); //output is [ 10, 20, 30, 40, 50 ]*/
   
// Trim()

/*let strr=" welcome ";
console.log(strr.length); //9
console.log(strr.trim().length);//7

//TrimStart()
let strr=" welcome "
console.log(strr.trimStart().length);//8

//TrimEnd()
let strr=" welcome ";
console.log(strr.trimStart().length);//8*/





//flat()  - this funcion is used to to make multidimentional arryes in single 
/*console.log(
    [10,20,30,40,50,[10,20,30]].flat(1)
);*/
//Map()
/*let arry=[10,20,30,40,50,60];
console.log(
    arry.map((e,i)=>{
        return e*15
    }) //  output[ 150, 300, 450, 600, 750, 900 ]
);
let ar=[1,2,3,4,5];
let ar2=["one","two","three","four","five"]
console.log(
    ar.map((e,i)=>{
        return [e,ar2[i]];
    })
);  
//out put is [ [ 1, 'one' ],
[ [ 1, 'one' ],
  [ 2, 'two' ],
  [ 3, 'three' ],
  [ 4, 'four' ],
  [ 5, 'five' ] ]*/



  /*let ar=["Angular js","React js","view js"," java srcipt"];
let ar2=["node js","aws","service less","jquey","boostrap"];
let ar3=["mysql","mean strack","mern strack","mongodb"]
console.log(
    ar.flatmap((e,i)=>{
        return [e,ar2[i],ar3[i]];
    })
);  
output is
//map()
  [ [ 'Angular js', 'node js', 'mysql' ],
  [ 'React js', 'aws', 'mean strack' ],
  [ 'view js', 'service less', 'mern strack' ],
  [ ' java srcipt', 'jquey', 'mongodb' ] ]*/


  /*//entries()
let obj={
    p_id:111,
    p_name:"p_one",
    p_coct:100000,
};
console.log(Object.entries(obj));
//out put is    [ [ 'p_id', 111 ], [ 'p_name', 'p_one' ], [ 'p_coct', 100000 ] ]*/

/*//copywithin() function
let arr=[0,1,2,3,4,5,6,7,8,9];
console.log( arr.copyWithin(2));//[ 0, 1, 0, 1, 2, 3, 4, 5, 6, 7 ]
let arr2=[10,20,30,40,50];
console .log(arr2.copyWithin(1));//[ 10, 10, 20, 30, 40 ]
let arr3=[100,200,300,400,500];
console .log(arr3.copyWithin(4));  //[ 100, 200, 300, 400, 100 ]
let arr4=[100,200,300,400,500,600,700,800,900];
console .log(arr4.copyWithin(2,6,8));//[ 100, 200, 700, 800, 500, 600, 700, 800, 900 ] */


/*//find()
let arry=[10,20,30,40,50,60,];

console.log(arry.find((e,i)=>{
    return e==20;
})
);
// output is 20

let arry1=[10,20,30,40,50,60,];

console.log(arry1.find((e,i)=>{
    return e==15;
})
);
//output is undefined*/



/*//IastIndexof() 
console.log(
    [10,20,30,80,50,80,70,80,].lastIndexOf(70)
);*/ //out put is 6


/*//includes()  this is a boolean function this function is used to 
//check the particulr element present or not
console.log(
    [10,20,30,80,50,80,70,80,].includes(10)
);
//output is true
console.log(
    [10,20,30,80,50,80,70,80,].includes(5)
);
//out put is false*/


/*//every()
//it will check the each and every element baced on condition 
console.log(
    [10,20,30,40,50,].every((e,i)=>{
        return e>=10
    })
);*/
/*//some()
//if any one element satisfies the condition then it will retuns true else  false
console.log(
    [10,20,30,40,50,].some((e,i)=>{
        return e>=50
    })
);*/
/*//fill() it will replaced with present element with new "newvalues"
console.log(
    [10,20,30,80,50,80,70,80,].fill(5)
);
console.log(
    [10,20,30,80,50,80,70,80,].fill(5,2)
);
console.log(
    [10,20,30,80,50,80,70,80,].fill(1,2,7)
);*/



/*console.log(
    [1,2,3,4,5,6,7,8].lastIndexOf(1,5)
);//0

//reverse()
console.log(
    [1,2,3,4,5,6,7,8,9].reverse()
);//[ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]*/


/*let obj= ["angulerjs","reactjs","nodejs"];
console.log(
    obj.reverse()
);//[ 'nodejs', 'reactjs', 'angulerjs' ]

/*console.log(
    ["angulerjs","reactjs","nodejs"] .reverse()
); // [ 'nodejs', 'reactjs', 'angulerjs' ]

let obj=["hello"];
console.log(
    Array.from("hello").reverse().join(" ")
);//o l l e h


let arr=['angulerjs','nodejs','reactjs'];
console.log(
    arr.map((element,index)=>{
        return Array.from(element.reverse().join(" "));
    })
);*/ //am not getting output



/*//sort() this function is used to sort the data either acending order or decending order
console.log(
    [1,3,4,5,8,7,9,2,6].sort((arg1,arg2)=>{
        return arg1-arg2;
    })
); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


console.log(
    [1,3,4,5,8,7,9,2,6].sort((arg1,arg2)=>{
        return arg2-arg1;
    })
);//[ 9, 8, 7, 6, 5, 4, 3, 2, 1 ]*/


/*console.log(
    [10,30,40,50,80,].sort((a,b)=>{
        return b-a;
    })
);//[ 80, 50, 40, 30, 10 ] decending order
console.log(
    [10,30,40,50,80,].sort((a,b)=>{
        return a-b;
    })
);//[ 10, 30, 40, 50, 80 ] acending order
console.log(
    [10,30,40,50,80,].sort((a,b)=>{
        return a-b;
    })
);
/* //tostring()
console.log(
    ['angulerjs','nodejs','reactjs'] .toString()
);//angulerjsnodejsreactjs

/*console.log(
    [10,50,20,40,30,].sort((a,b)=>{
        return a-b;
    })[1]
);// 20 second least number
console.log(
    [10,50,20,40,30,].sort((a,b)=>{
        return b-a;
    })[1]
);//40 second hightest number

console.log(
    ['angulerjs','nodejs','reactjs'] .join("")
);   //angulerjsnodejsreactjs

console.log(
    ['angulerjs','nodejs','reactjs'] .join()
);    //angulerjs,nodejs,reactjs
*/
  //split() this function is used to converts the string to equalent arry based on separator
  /*console.log(
      "hello".split()
  )//[ 'hello' ]



  //concat()
  //concat is used to join the arrys
console.log(
    ['angulerjs'].concat(['reactjs'])
);//[ 'angulerjs', 'reactjs' ]
 

console.log(
    "this is my practice" .split(" ")
);//[ 'this', 'is', 'my', 'practice' ]*/
/*
function myFun(){
    var data=100;
    let data1=200;
console.log(data,data1);
};
myFun();



const obj={
    pcost:10000
};
console.log (obj);
obj.pcost=20000;
console.log(obj);
obj={} 
console.log(obj);*/



/*//1
function fun_one(callback){
    callback();
};
function fun_two(){
    console.log("hello")
}
fun_one(fun_two);

//2
function fun_one(callback){
    callback();
};
 fun_one(
    function fun_two(){
        console.log("hello");
    }
 );
 //3
 function fun_one(callback){
     setTimeout(()=>{
         callback();
     },5000);
     console.log("welcome");
 };
 fun_one(function fun_two(){
     console.log("hello");
 });
 //4
 function fun_one(callback){
     callback("hello");
 };
 fun_one(function fun_two(res){
     console.log(res);
 });*/


 /*//callback function 

 function add(num,callback){
     return callback((num+5),false);
 };
 function sub(num,callback){
    return callback((num-3),false);
};
function mul(num,callback){
    return callback((num*2),false);
};
function div(num,callback){
    return callback((num/2),false);
};
add(5,(addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes, (divRes,error)=>{
                            if (!error) {                    
                                console.log(divRes);
                            }
                        })
                    }
                })
            }
        })
    }
})
//output is 7*/




//genaretors functions 
//genaretor functions are used to genaret the valus dynamically in heap area
//genaretor functions are start with "*"
//example=
/*function *myFun(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
};
let cursor=myFun();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());

//output is 
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: 6, done: false }
{ value: undefined, done: true }

ex2
function *fun_one(){
yield 1;
yield 2;
return "hello"
yield 3;
};
let cursor=fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
//output is 
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 'hello', done: true }
{ value: undefined, done: true }

//ex3

function *fun_one(){
yield 1;
yield *fun_two();
yield 3;
};
function *fun_two(){
    yield 2;
};
let cursor=fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
//output is 
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }

//iterators
//as per latest javascript we have folloing iterators
// for()
//forEach()
//for ..of()
//for ..in()
 let arr= ["anguler","node","react"] 
 for (let i=0;i<arr.length;i++){
     console.log(arr[i]);
 };
//output is anguler
//node
//react

arr.forEach((element,index)=>{
    console.log(element,index);
});//out put is
//anguler 0
//node 1
//react 2
for(let x of arr){
    console.log(x);
};
let obj={
    p_id:111,
    p_name:"p_one",
    p_cost:10000
};
for (let key in obj){
    console.log(obj[key]);
};
//out put is 
//111
//p_one
//10000*/




/*//IIFE
//IIFE stands for immdiate invokable functional expressions
//IIFE introduced in ES9
//IIFE called as self executable functions
//by using  this concept we can overcome"global polluting issues"
//syntax :
//(()=>{//business logics})();
 
//          (()=>{
//      console.log('hello...!')
//         })();
((num1,num2)=>{
    console.log(num1+num2);
})(1,2);
//output is 3

//remedy for global polluting issue
for(var i=0;i<5;i++){
    ((i)=>{
        setTimeout(()=>{
            console.log(i);

        },5000);
    })(i);
};
//output is 
0
1
2
3
4


 let res =(()=>{
     return "hello";
 })()
console.log(res); //hello*/
/*let products=[
    {p_id:111,p_name:"p_one",p_cost:10000},
    {p_id:222,p_name:"p_two",p_cost:20000},
    {p_id:333,p_name:"p_three",p_cost:30000},
    {p_id:444,p_name:"p_four",p_cost:40000},
    {p_id:555,p_name:"p_five",p_cost:50000},
];
products.forEach((element,index)=>{
    console.log(element.p_id,
                 element.p_name,
                 element.p_cost,
                 index);
});
//output is 
111 'p_one' 10000 0
222 'p_two' 20000 1
333 'p_three' 30000 2
444 'p_four' 40000 3
555 'p_five' 50000 
let obj={
    login:login
};
function login(){
    return "welcome to login module";
};
console.log(obj.login()); //output is welcome to login module
let obj ={
    oracle:()=>{
        return "oracle connection comming soon!"
    },
    mysql:()=>{
        return "mysql connection comming soon!"
    },
    mssql:()=>{
        return "mssql connection comming soon!"
    },
    mongodb:()=>{
        return "mongodb connection comming soon"
    }

};
console.log(
    obj.oracle(),
    obj.mysql(),
    obj.mssql(),
    obj.mongodb()
    
);//output is oracle connection comming soon!
// mysql connection comming soon! mssql connection comming soon! mongodb connection comming soon*/



/*//assign()
//assign function is presented in object class
//assign() function is used to collabrate the json objects
console.log (
    Object.assign({p_id:111},
                  {p_name:"p_one"},
                  {p_id:10000})
);//output is { p_id: 10000, p_name: 'p_one' }


//promises
//promises establishe the communicatoin between the producer and concumer.
//producer can define the promises  
//concumer can use the promises
//we will create the promises by using promise class 
//we will consume the promise by using "then()"
//promises have following states
//@resole @reject


let my_Promise= new Promise((resolve,reject)=>{
    resolve("tomorrow we will discusses E2020");
});
my_Promise.then((posRes)=>{
        console.log(posRes)
},(errRes)=>{
    console.log(errRes)
});


//ex2
let my_Promise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("tomorrow we will discusses E2020");
    },5000);
});
my_Promise.then((posRes)=>{
        console.log(posRes)
},(errRes)=>{
    console.log(errRes)
});//output is the tomorrow we will discusses E2020


//ex3
let my_Promise= new Promise((resolve,reject)=>{
    resolve("tommorow will class there");
    reject("tomorrow will class not there");
});
my_Promise.then((posRes)=>{
        console.log(posRes)
},(errRes)=>{
    console.log(errRes)
});//out put is tommorow will class there
// note: always only one state execution possible either resolve or rejected
//order execution also importent


//ex4
let promise1 = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello_1");
    },0);
});
let promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello_2");
    },5000);
});let promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello_3");
    },10000); 
});

Promise.all([
    promise1,
    promise2,
    promise3
]).then((posRes)=>{
    console.log(posRes[0]);
    console.log(posRes[1]);
    console.log(posRes[2]);
},(errRes)=>{
    console.log(errRes);
});*/  //after 10seconds console give the output
/*//ex5
let promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello_1");
    },0);
});

let promise2= new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello_2");
    },5000);
});

let promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello_3");
    },10000);
});
promise1.then((res)=>{
    console.log(res);
});
promise2.then((res)=>{
    console.log(res);
});
promise3.then((res)=>{
    console.log(res);
});// output is 
//hello_1
//hello_2
//hello_3 //hello1 is after 1 second and hello2 is after 5 seconds and hello3 is after 10 seconds*/





//19-12-2019 
/*//async & await
//async& await both are keywords in java script
//async& await both are introduced in ES9
//we will consume promises with async & await keywords insted of then()
//async & await is increses the application perfomance
//we can overcome the "callback hell"with async & await


//ex1 with out then()functionlet 
promise1= new Promise((resolve,reject)=>{
    resolve("hello");
});
async function myFun(){
    let res = await promise1;
    console.log(res);
};
myFun()*/


/*//ex2
 async function fun_one(){
     return new Promise ((success,failure)=>{
         setTimeout(()=>{
             success("hello");
         },5000);
     });
    };
    async function fun_two(){
        let res= await fun_one()
        console.log(res);
    };
fun_two();//  output is after five seconds hello


//ex2 callback
function add(num){
    return new Promise ((resolve,reject)=>{
        resolve((num)+5);
    });
};
function sub(num){
    return new Promise ((resolve,reject)=>{
        resolve((num-3));
    });
};
function mul(num){
    return new Promise ((resolve,reject)=>{
        resolve((num*2));
    });
};
function div(num){
    return new Promise ((resolve,reject)=>{
        resolve((num/2));
    });
};
async function consume(){
    let res1= await add(5);
    let res2= await sub(res1);
    let res3= await mul(res2);
    let res4= await div (res3);
    console.log(res1,res2,res3,res4);
};
consume(); //output is 10 7 14 7*/






/*//21-12-2019
ex1
for (var i=0; i<5; i++){
setTimeout(()=>{
    console.log(i);
},5000);
}; 
  out put is
5
5
5
5
5
// var won't have capability to to maintain multiple  capies, so we  are getting answer as 5
       
ex2
for( let i=0;i<5; i++){
setTimeout(()=>{
    console.log(i)
},5000);
};
//output is 
0
1
2
3
4
// let have to maintain to multiple copies

//function
// particular business logic called as function
//finctions are used reuse the business logic
//we have following types of functions as per ES6 standards


//@contructor functions
//@named functions
//@anoymous functions /arrow funtions /callback functions
//rest parameters in functions
//@defult parameters in functions
//@optional parameters in functions (valid in type script)
//contructor functions
//collections of variables and functions class
//we can create class like concept by using contructor functions
//in contructor function all members should start with "this" keyword
// we can create the object by using "new" keyword.


//ex1
function class_one(){
    this.sub_one= "reactJS";
    this.sub_two= "nodeJS";
    this.sub_three= "MongoDB";

    this.getsub_one= function(){
        return this. sub_one;
    };
    this.getsub_two= function(){
        return this. sub_two;
    };
    this.getsub_three= function(){
        return this. sub_three;
    };
};
let obj= new class_one()
console.log( obj.getsub_one(),
             obj.getsub_two(),
             obj.getsub_three() );//output is   reactJS nodeJS MongoDB



//ex2
function class_one(arg1, arg2,arg3){
    this. param1= arg1;
    this. param2= arg2;
    this. param3= arg3;
};
let obj1 = new
 class_one("angulerJS","node JS","MongoDB");
 console.log( obj1. param1,
             obj1.param2,
             obj1.param3,);
let obj2 = new
 class_one("rect JS","node JS","MYSQL");
 console.log(obj2.param1,
             obj2.param2,
             obj2.param3,);
let obj3 = new
 class_one("viewJS","node JS","SQLserver");
 console.log(obj3.param1,
             obj3.param2,
             obj3.param3,); 
 out put is angulerJS node JS MongoDB
rect JS node JS MYSQL
viewJS node JS SQLserver   */


/*//adding the variables and functions to the classes diynamically
function class_one(){};
class_one.prototype.sub="reactJS";
console.log(new class_one().sub);

//ex1
function class_one(){};
class_one.prototype.wish=function(){
    return "hello";
};
console.log(new class_one().wish()  );


//inharitence
//getting the properties from parent class to chlid class called as inharitence


//create the parent 
function parent(){};
//add the variable& function to parent 
parent .prototype.wish="hello";
parent .prototype.getWish= function(){
    return this.wish;
};
//create the child
function child(){};
child.prototype= Object.create(parent. prototype);
// add  the variable and function  dynamically
child.prototype.wish1="welcome";
child.prototype.getWish= function(){
    return this.wish1;
};

let p = new parent();
console.log(p.wish,p.getWish());
let c = new child();
console.log( c.wish,
            c.wish1);
output is            
 hello hello
hello welcome


//multilevel inharitence

ex1
function class_one(){}
class_one.prototype.fun_one=function(){
    return "hello_1";
}
function class_two(){}
class_two.prototype=
Object.create(class_one.prototype);
class_two.prototype.fun_two= function(){
    return "hello_2"
}
function class_three(){}
class_three.prototype=
Object.create(class_two.prototype);
class_three.prototype.fun_three= function(){
    return "hello_3"
};
let obj= new class_three();
console.log(obj.fun_one(),obj.fun_two(),obj.fun_three());

//output is hello_1 hello_2 hello_3
//ex2
 function class_one(){};
     class_one.prototype. dbData= function(){
         return "oracle data...!";
     };
     function class_two(){};
     class_two.prototype=
     Object.create(class_one.prototype);
     class_two.prototype.dbData=function(){
         return"SQL server data...!";
     };
 console.log(new class_two().dbData());
 //output is SQL server data...!*/

 //23-12-2019
 // the function without named called as anonymous functions
 // anonyomus functions also callled as arrow  functions 
 // arrow functions are introduced in ES6
 //arrow functions are beheve like callback functions
 /* syntax
  // function defination 
  var/ let/const variable named =(arguments)=>{
      //business logics
  };
  
  //function calling 
  variable name(parameters);*/
/*let fun_one=()=>{
return "hello";
};
console.log(fun_one);
console.log(fun_one());

output is [Function: fun_one]
hello

let fun_one= arg1=>{
    return arg1;
}
console.log(fun_one("hello"));
let my_fun=(arg1,arg2,arg3)=>{
    console.log(arg1,arg2,arg3);
};
my_fun("hello","hi","welcome");//hello hi welcome

let outer=()=>{
    return ()=>{
        return "hello"
    };
};
console.log(outer()());// output  is [Function: outer] ,[Function], hello
let networkCall=(arg1,arg2,successCallBack,errorCallBack)=>{
    return 
    successCallBack(arg1)+"...."+errorCallBack(arg2);
} ;
networkCall(
    "Success",
    "Error",
    (posRes)=>{
        console.log(posRes);
    },
    (errRes)=>{
        console.log(errRes);
    }
);
//23-12-2019
//ex1
function fun_one(...arg1){
    console.log(arg1)
};
fun_one(10);//[10]
fun_one(10,20,30);//[10,20,30]
fun_one()//[]
fun_one(undefined);//[ undefined ]
fun_one(undefined,undefined);//[ undefined, undefined ]
fun_one(null);//[ null ]
fun_one(undefined,null);//[ undefined, null ]
fun_one(null,null);//[ null, null ]
fun_one(10,undefined,20,null)//[ 10, undefined, 20, null ]


//

//ex2
//we can supply only one rest parameters
// rest paremeters position shouid be the last in arguments
//combination of the normal parameters and ( reguler parameters)
function fun_one(arg1,...arg2) {
    console.log(arg1,arg2);
};
fun_one();//expected  at least 1 arguments,but got 0 // expected atleast(1) one arguments
fun_one(10)//10 []
fun_one(10,20,30)//10 [ 20, 30 ]
fun_one(undefined,10,20)//undefined [ 10, 20 ]
fun_one(undefined,undefined)//undefined [ undefined ]
fun_one(undefined,null)//undefined [ null ]
fun_one(null,null)//null [ null ]

//ex3//
function fun_one(arg1,arg2,...arg3){
    console.log(arg1,arg2,arg3);
};
//expected atleast two arguments
fun_one(10);//10 undefined []
fun_one(10,10)//10 10 []
fun_one(10,undefined,20)//10 undefined [ 20 ]
fun_one(10,null,undefined)//10 null [ undefined ]


//ex4
//defult parameter in functions
//while defining the functions,few arguments have defult values 
function fun_one(arg1="angulerJS",
                 arg2="nodeJS",
                 arg3="reactJS"){
                     console.log(arg1,arg2,arg3)
                 };
                 fun_one()//angulerJS nodeJS reactJS
                 fun_one("viewJS");//viewJS nodeJS reactJS
                 fun_one(undefined,"mangoDB","SQLserver");//angulerJS mangoDB SQLserver
                 fun_one(null)//null 'nodeJS' 'reactJS'


//ex4
function fun_one(arg1="hello",
                 arg2="hello_1",
                 arg3="hello_2",
                 arg4="hello_3"){
                 console.log(arg1,arg2,arg3,arg4);
                 };
                 fun_one();//hello hello_1 hello_2 hello_3
                 fun_one("hello_1",
                          undefined,
                          "hello3",
                          "hello_5"
                          );//hello_1 hello_1 hello3 hello_5
                          fun_one(null,null,null,null)//null null null null
                          fun_one(undefined,undefined,undefined,undefined)//hello hello_1 hello_2 hello_3


 //defult with rest
 //rest should be last function
 
 
 //ex6
 function fun_one(arg1="hello",...arg2){
     console.log(arg1,arg2);
 };
 fun_one();//hello []
 fun_one(undefined,"hello")//hello [ 'hello' ]
 fun_one(null,undefined)//null [ undefined ]
 fun_one(undefined,undefined)//hello [ undefined ]*/

 //normal ,defult and rest 
 //rest pamameter should be last
 /*function fun_one(arg1,arg2){
    if(arg2="hello_2")
    var arg3=[];
    for(var_i=2;_i<arguments.length;_i++)
        arg3[_i-2]=arguments[_i];
        console.log(arg1,arg2,arg3);
    
};
fun_one("hello_",undefined,"hello_3");*/






