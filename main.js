/*Task #1*/

let USD = 8;

function convert(amount) { 
   
    let UAH = amount * USD;
    console.log (UAH + ' UAH');
}
convert(10);

/*Task #2*/

function reverse(str) {

    const result = str.split(``).reverse().join(``);
    return (result);
}
console.log (reverse ( 'Hello') );

/*Task #3*/

function printStairs(n) {
    for (let i = 0; i < n; i++) {
        console.log("#".repeat(i + 1));
    }
}
 printStairs(3);

 /*Task #4*/

 function sumRange (start, end) {

    let sumRange = 0;
    for (let i = start; i <= end; i++) {
        sumRange += i;
    }
        return sumRange;
 }
 console.log (sumRange (2, 4));
 console.log (sumRange (-1, 3));

  /*Task #5*/

  function min(a, b, c) {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < c) {
        console.log(b);
    } else {
        console.log(c);
    }
}

min(1, 2, -1);

/*Task #6*/

function printPyramid(n) {
    for (let i = 0; i < n; i++) {
        let a = '#'.repeat(i * 2 + 1);
        let b = ' '.repeat(n - (i + 1));
        console.log(b + a);
    }
}
printPyramid(5);

