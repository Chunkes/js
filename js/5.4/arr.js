let counter = 0;
function sumInput() {
let numb = [];
while (true) {
    let value = prompt("number");
    if (value === "" || value === null || !isFinite(value)) break;

    numb.push(+value);
}

for (let num of numb){
counter += num;
}
return counter;
}

alert( sumInput() );
