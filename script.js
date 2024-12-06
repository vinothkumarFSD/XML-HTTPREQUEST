// let array=[1,2,3];
// array=[4,5,6];
// console.log(array);

// const array=[1,2,3];
// array.push(4);

// console.log(array);

// without shorthand

// let calc = {
//     add : function(x,y){
//         console.log(x+y);
//     }
// };
// calc.add(5,6);

// object shorthand

// let calc = {
//     add(x,y){
//         console.log(x+y);
//     }
// };
// calc.add(5,6);

// let sayhello = ()=> console.log(`hello ${'guest'}`);

// sayhello();

// let array = [1,2,3,4,5];

// for (let number of array){
//     console.log(number);
// }

// var obj1 = {"name":"Sam","class":"MCA"};
// var obj2 = {"class":"Sam","name":"MCA"};

// var flag=true;

// if(Object.keys(obj1).length==Object.keys(obj2).length){
//     for(key in obj1) { 
//         if(obj1[key] == obj2[key]) {
//             continue;
//         }
//         else {
//             flag=false;
//             break;
//         }
//     }
// }
// else {
//     flag=false;
// }
// console.log("is object equal :", flag);



// const json1 = {
//     name: "Alice",
//     age: 25,
//     city: "New York"
// };

// const json2 = {
//     city: "New York",
//     age: 25,
//     name: "Alice"
// };

// const areEqual = Object.is(json1, json2);

// if (areEqual) {
//     console.log("JSON objects are identical.");
// } else {
//     console.log("JSON objects are different.");
// }

// const xhr= new XMLHttpRequest();
// xhr.open('GET','https://jsonplaceholder.typicode.com/user');
// xhr.onload=function(){
//     if(this.status==200){
//         const data=JSON.parse(this.responseText);
//         console.log(data[0].address.zipcode);
//     }
// };
// xhr.send();


const xhr= new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.onload=function(){
    
    if(this.status==200){
         const data=JSON.parse(this.responseText);
            for(let country of data){
               console.log(`${country.name.common}-Region:${country.region},Population:${country.population}`);
               console.log(`${country.name.common}-Flags:${country.flags.png},${country.flags.svg}`);
               console.log(`${country.name.common}-Sub-Region:${country.subregion}`);
            };  
    }
};
xhr.send();

