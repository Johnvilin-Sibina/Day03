/*1.How to compare two JSON have the same properties without order?
a. let obj1 = {"name" : "Person 1", "age" : 5};
b. let obj2 = {"age" : 5, "name" : "Person 1"};*/

//Answer:

let obj1={"name":"Person 1", "age":5};
let obj2={"age":5, "name":"Person 1"};
let res=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(let key in obj1){
        if(obj1[key]===obj2[key]){
        continue;
        }
        else{
            res=false;
            break;
        }
    }
    for(let key in obj1){
        if(obj1[key]===obj2[key]){
            continue;
        }
        else{
            res=false;
            break;
        }
    }
}
else{
    res=false;
}
console.log(res);