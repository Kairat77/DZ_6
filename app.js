// Задача 1
let newColor = ['red', 'yellow', 'green', 'black', 'white'];
let [elem1, elem2, ...arr] = newColor;
document.write(elem1 + '| '+ elem2 + '|' +arr);
alert(elem1);
alert(elem2);
alert(arr);
// Задача 2
let newArr = ['red','yellow','green','black','white'];
newArr.reverse();
let [elem3, elem4] = newArr;
document.write(elem3+'|'+elem4);
alert(elem3);
alert(elem4);
//Задача 3
function func (a = 'аноним'){
    alert('привет,'+ a);
}
let name = 'Кайрат';
func();
alert(name);
