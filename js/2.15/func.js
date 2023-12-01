let x = +prompt("Введите число");
let n = +prompt("Введите степень");

function pow(x,n){
let result = x;
for (let i = 1; i<n; i++) {
result *= x;
} return result;
} 

if ((n % 1 == 0 && n>=1)){
    alert(pow(x,n));
} else {
alert('Нет');
}



