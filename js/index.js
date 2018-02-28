const a = parseInt(prompt('Enter a'));
const b = parseInt(prompt('Enter b'));
const c = parseInt(prompt('Enter c'));

function diskr(a, b, c) {
return Math.pow(b, 2) - 4 * a * c;
}
let d = diskr(a, b, c);
let x1 = (-b + Math.sqrt(d)) / (2 * a);
let x2 = (-b - Math.sqrt(d)) / (2 * a);
let x3 = -(b / (2 * a));

function solution(a, b, c) {
    if (d > 0) { return [" x1 = " +  x1 , " x2 = " +  x2] }
    else  if (d == 0) { return x3  }
    else { alert(" The quadratic equation can't be solved! Try Again ") }
}
const Result = solution(a, b, c)
document.write(Result);



