// this ... in the params is called rest operator
// rest parameter must be last parameter
// spread operator can be used in object too like array
const sumFunction = (...params) =>{
    let sum = 0;
    params.forEach(num =>{
        sum += num
    })
    return sum;
}
const sum = sumFunction(1,2,3,4,5,6)
console.log(sum)

// 