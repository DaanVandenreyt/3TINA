var mijnArray = []

mijnArray.push(7, 15, 72, 1, 13);

let result = 0;
mijnArray.forEach(element => {
    result += element
});

console.log("Result: " + result);