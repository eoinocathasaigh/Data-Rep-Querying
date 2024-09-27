//2(d) Returning array values under 70 by 2

const ages = [25, 31, 42, 77];
//Maps apply a certain operation to each of our ages
//Map function to retrun the ages under 70
let d = ages.map((item)=> {
    if(item < 70)
        return item * 2;
    else 
        return item;
})

console.log(d);

//Could also perform it like this
/*
let multiplyVal = ()=>{
    const ages = [25, 31, 42, 77];
    const mult = ages.map(multiply);
    console.log("Values are: " + mult);
}
//Maps apply a certain operation to each of our ages
//Map function to retrun the ages under 70
let multiply = (num) =>{
    if(num < 70){
        return num *2;
    }
    else return num;
}
//Passed values to the function
multiplyVal();
*/