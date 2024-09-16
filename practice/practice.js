/*
justNames:
input : a array of objects of persons
return value will be matched array that includes only the name of each object
*/
const persons = [{name: "Tomi",age:12},{name: "Noy",age:18},{name: "yoav",age:5},{name: "yoav",age:25},{name: "yoav",age:3}];

function justName(ogArray){
    const result = [];
    for(let item of ogArray){
        result.push((item.name).toUpperCase());
    }
    return result;
}

console.log(`The return value for justName is ${justName(persons)}`);

function filterOver18(ogArray){
    const result = [];
    for(let item of ogArray){
        if(item.age > 18){
            result.push(item);
        }
    }
    return result;
}
const a =filterOver18(persons);
console.log(`The return value for filterOver18 is`);
for(let item of a){
    for(let property in item){
        console.log(item[property]);
    }
}

