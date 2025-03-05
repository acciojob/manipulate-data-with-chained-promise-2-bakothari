//your JS code here. If required.
let output = document.getElementById("output");
let arr = [1, 2, 3, 4];

function even() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr); 
        }, 3000);
    })
        .then((numbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let filteredArr = numbers.filter(num => num % 2 === 0); 
                    output.textContent = filteredArr;
                    resolve(filteredArr);
                }, 1000);
            });
        })
        .then((evenNumbers) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    let multipliedArr = evenNumbers.map(num => num * 2); 
                    output.textContent = multipliedArr 
                    resolve(multipliedArr);
                }, 2000);
            });
        });
}


even();