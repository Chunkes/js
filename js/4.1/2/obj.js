let obj = {
name:"Gnida"
}
function isEmpty(obj) {
    for (let name in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
      }
      return true;
    }
alert(isEmpty(obj))
