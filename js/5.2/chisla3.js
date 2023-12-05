function randomInteger(min, max) {
    let a = min + Math.random() * (max + 1 - min);
    return Math.floor(a);
  }
  
  alert( randomInteger(1, 3) );
