
//Methods of String

//charAt

let str = "Hello JavaScript"
console.log(str.charAt(0));
console.log(str.charAt(6))

//concat
let str1 = "Hello";
let str2 = "JavaScript";
console.log(str1.concat(" ",str2, "!"))

//includes
let str4 = "Hello";
console.log(str4.includes("Hello"))//true
console.log(str4.includes("Hi"))//false

//indexOf
let str5 = "Hello JavaScript";
console.log(str5.indexOf('l'))
console.log(str5.indexOf("html"))// ete chka kbere -1

//replace
let str6 = "Hello JavaScript";
console.log(str5.replace("JavaScript", "World"))

//startsWith
let text = "JavaScript is cool";
console.log( text.startsWith("java"))
console.log( text.startsWith("Java"))

//toLowerCase
let text1 = "Hello JavaScript";
console.log(text1.toLowerCase())

//toUpperCase
let text2 = "Hello JavaScript";
console.log(text2.toUpperCase())

//trim
let text3 = " Hello JavaScript! ";
console.log(text3.trim())

//slice
let text4 = "Hello JavaScript";
console.log(text4.slice(0, 5))
console.log(text4.slice(6))

//split
let text5 = " Hello JavaScript! ";
console.log(text5.split(" "))

//repeat
let text6 = "Hello"
console.log(text6.repeat(4))

//search
let str7 = "Hello JavaScript";
console.log(str7.search("JavaScript"))
console.log(str7.search("Hi"))//ete ham@nknum chi gtnum berum e -1


//Methods of Number

// Number
let a = "15";
let num = a;
console.log(a)
console.log(num + 5)

let b = true;
let num1 = Number(b)
console.log(b)
console.log(num1 * 10) // qani vor trun = 1, nuyn@ karox enq anel fals-ov,vor = 0-i

//parseFloat
let c = "11,99"
let num2 = parseFloat(c)
console.log(num2)

let d = "3,55 4,20"
let num3 = parseFloat(d)
console.log(num3) // verlucum e ev ete aranjin arjeq@ tiv e veradarjnum e ayn tasnordakan arjeqi tesqov


//parseInt

let num4 = Number.parseInt("5324 ");
console.log(num4);
let num5 = Number.parseInt("32.65");
console.log(num5);// veradarjnum e toxic verlucvac ambojx tiv@


//toString

let e = 20;
let num6 = e.toString()
console.log(num6)


let f = 10;
let num7 = e.toString(2)
console.log(num7)// veradarjnum e tvi erkuakan arjeq@


//toFixed

let num8 = 5.6789;
console.log(num8.toFixed())

let num9 = 5.6789;
console.log(num9.toFixed(2))//tasnordakan, ketic heto  erku tvanshanner@ kloracnum e verev 


//Number.Max_Value
let str8 = "Hello";
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)




//Methods of Array

//concat 
const arr = ["Hello", "World", "JS"];
const arr1 =[1,2,3];
const arr2 = arr.concat(arr1);
console.log(arr2)

//filter
const values = [1, 2, 3, 4, 6, 7, 8 , 9, 9, 11];
const result1 = values.filter(value =>  value > 4);
console.log(result1);

//find
const arr3 = [5, 12, 8, 130, 44];
const found = arr3.find(element => element > 10);
console.log(found)

//findIndex
const array_1 = [4, 15, 9, 132, 48];
const isLargeNumber = (element => element > 13);
console.log(array_1.findIndex(isLargeNumber));

//forEach
const array2 = ['a', 'b', 'c'];
array2.forEach(element => console.log(element));

//includes
const array1 = [2, 3, 4];
console.log(array1.includes(2));
const pets = ['mouse', 'cat', 'dog'];
console.log(pets.includes('mouse'));
console.log(pets.includes('use'));


//indexOf
const beasts = ['cat', 'dog', 'camel', 'duck', 'dog'];
console.log(beasts.indexOf('dog'));
console.log(beasts.indexOf('dog', 2));
console.log(beasts.indexOf('giraffe'));//ham@nknum chka kbere -1

//isArray(boolean arjeq)
console.log(Array.isArray([2, 4, 5]));
console.log(Array.isArray('[]'));
console.log(Array.isArray(new Array(5)));

//join
const elements = ['Water','Fire', 'Air'];
console.log(elements.join());
console.log(elements.join(''));
console.log(elements.join('-'));

//map
const numbers = [10, -2, 4, 9, -5];
const value = numbers.map(val => val * 10);
console.log(value);

//pop
const numbers1 = [0, -3, 2, 8, -9];
const value1 = numbers1.pop();
console.log(value1);

//push
const numbers2 = [0, -3, 4, 9];
const count = numbers2.push(-2);
console.log(count);
console.log(numbers2);

//reduce
const array3 = [1, 2, 3, 4,5];
const sumWithInitial = array3.reduce(
  (accumulator, currentValue) => accumulator + currentValue  
);
console.log(sumWithInitial);

//reduseRight
const array4 = [[1, 2], [3, 4], [5, 6]];
const result = array4.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result);

//reverse
const array5 = ['I', 'love', 'JavaScript'];
console.log(array5)
const reversed = array5.reverse();
console.log(array5)

//shift
const array6 = [0,1,2,3];
const firstElement = array6.shift();
console.log(array1);
console.log(firstElement);

//slice
const animals = ['cat', 'dog', 'camel', 'duck', 'bison'];
console.log(animals.slice(1));
console.log(animals.slice(2, 5));
console.log(animals.slice(-1));
console.log(animals.slice(2, -1));

//splice
let names = ['Gurgen', 'Gevor', 'Artyom','Ashot'];
names.slice(4, 1,'Hayk');
console.log(names)

//sort
const array8 = [5, 20, 2, 25, 1000];
array1.sort();
console.log(array8);

//toString
const array9 = [2,'a', 4,'2b'];
console.log(array9.toString());

//unshift
const array10 = ['e','f','g'];
console.log(array10.unshift('a','b','c'));
console.log(array10)











