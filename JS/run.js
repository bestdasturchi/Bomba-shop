
// 10-dars 

let ismember = "yes"
let result = ismember === "yes" ? "20% chegirma" : "5% chegirma";
console.log(result);



//12-dars

color1 = "oq"
color2 = "qora"
colorTemp = color1
color1 = color2;
color2 = colorTemp;

console.log(color1)
console.log(color2)

// 13-dars 

let hour = 1;
if (hour >= 6 && hour < 12) {
    console.log("Xayrli tong")
} else if (hour >= 12 && hour < 18) {
    console.log("Xayrli kech")
} else {
    console.log("Xayrli tun")
};

// 14-dars

let word = "ball";
switch (word) {
    case "ball":
        console.log("kaptok");
        break;
    case "pretty":
    case "beatiful":
    case "lovely":
        console.log("chiroyli")
}

// 15-dars

for (let k = 0; k <= 4; k++)
    console.log("O'chir", k);
for (let k = 5; k >= 1; k--) {
    if (k % 2 !== 0)
        console.log(k);
}
for (let k = 1; k < 100; k *= 3)
    console.log(k)

// 18-dars

const chocolate = {
    name: ":Rassia",
    amount: ":a bar of"
}
for (let key in chocolate) {
    console.log(key, chocolate[key]);
}
const numbers = [1, 2, 3, 4]
for (let number of numbers) {
    console.log(number)
}

// 19-dars 

function isLandscape(width, height) {
    return (width > height);
}
console.log(isLandscape(20, 30));
function getMax(a, b) {
    return (a > b) ? a : b;
};
console.log(getMax(4, 3))

// 21-dars

function Check_speed(speed) {
    if (speed < Speed_Limmit + km_per_point)
        console.log("Ok");
    else {
        const points = Math.floor((speed - Speed_Limmit) / km_per_point);
        if (points >= Max_points) {


            console.log("Guvohnoma olib qo'yiladi");
        }
        else {
            console.log('points:', points);
        }
    }
}
const Speed_Limmit = 70;
const km_per_point = 5;
const Max_points = 12
Check_speed(130)

//amaliy mashg'ulot

// avtoturargohga kirish 1$
// 1-soatga +2$
// 2-soatga +3$
// 3-soat va undan ko'pga +4$

Time = Math.floor(5.40);
// conculate(Time)
// function conculate(Time){
//     for (let j = 2; j <3 ; j++){
//         console.log("bill = ",j,"$")
//     }
// }
if (Time <= 1) {
    console.log("Bill = 2$");
} else {
    if (Time <= 2) {
        console.log("Bill = 3$");
    } else {
        console.log("Bill = 4$");
    };
};

// katalashtirish ctrl + shift + (+) 
// kichiklashtirish uchun ctrl + shift + (-)

// 30-dars

const circle = {
    radius: 21,
    draw() {
        console.log("doira");
    }
};

// const clone = {};
// for (let key in circle)
//     clone[key] = circle[key];

console.log("circle:")

const clone = Object.assign({ border_width: "5px" }, circle);

// const clone = {...circle};

console.log(clone);

// 32-dars

//yangi qator uchun /n ishlatiladi
let text = "salom \nsalom";
console.log(text);

// Amaliy mashg'ulot

// type1

// let phone = {
//     ram: "128GB",
//     size: "large",
//     brand: "iphone"
// };
// console.log(phone);

// type2

// function creatphone (ram, size, brand) {
//     return{
//         ram,
//         size,
//         brand
//     };
// };
// let phone = creatphone("128gb", "large", "iphone");
// console.log(phone);

// type3

function Phone(ram, size, brand) {
    this.ram = ram;
    this.size = size;
    this.brand = brand;
};
let phone = new Phone("128gb", "large", "myphone");

console.log(phone);

// tasodifiy son

// document.getElementById("id ni berib yozamiz!").innerHTML = Math.random();

// 34 - dars

let numers = [3, 4, 1];
numbers.push(5, 6);

numbers.unshift(1);

numbers.splice(1, 0, 2);

numbers.pop();
numbers.shift();
numbers.splice(2, 2);

// o'chirish uchun hammasini
// numbers = []; 
// numbers.length = 0;


// console.log(numbers.lastIndexOf(1));     
// console.log(numbers.indexOf(1, 2));

// console.log(numbers.includes(3));

console.log(numbers);


// const phones = [ 
//     { id: 1, ram: '128GB', size: 'large', brand: 'iphone' },
//     { id: 2, ram: '64GB', size: 'medium', brand: 'sumsung' },
// ];

// let phone = phones.findIndex(
// function(element){
// return element.id === 2 ;
// }
// );

// let phone = phones.findIndex(phone => phone.id === 2);

// console.log(phone);

// 35-dars

let first = [{ id: 1 }];
let second = [3, 4];

let combined = [...first, ...second];

console.log[combined];
// birlashtirish uchun

// let combined = first.concat(second);

// first.id = 7;
// console.log(first);
// console.log(combined);

// ajratish uchun

// let sliced = combined.slice(0, 2);
// console.log(sliced)

// 36-dars
let kit = [2, 3, 1];

kit.sort();

// sort kichikdan kattaga tartiblash!

console.log(kit);

kit.reverse();

// kattadan kichikkagacha tartiblash!

// 36-dars

let kit2 = [2, 3, 5, 4, 1];

console.log(kit);

let courses = [
    { id: 1, title: 'BMW' },
    { id: 2, title: 'spark' },
];

courses.sort(function (first, second) {
    let first1 = first.title.toLowerCase();
    let second1 = second.title.toLowerCase();
    if (first1 < second1) return -1;
    if (first1 > second1) return 1;
    return 0;
});

console.log(courses);

// 37-dars

// hamma sonlar musbatmi?
// every hamma sonlar uchun
let numbers1 = [2, 3, 1];
let isAllPositive = numbers1.every(function (numb) {
    return numb >= 0;
});
console.log(isAllPositive);

// some 1ham yetarli, 1tasini teshkiradi

let numbers2 = [2, 3, 1];
let atLeastPositive = numbers2.some(function (numb1) {
    return numb1 >= 0;
});
console.log(atLeastPositive);

//filter

let numbers3 = [2, 3, 1, -4];
let filtered = numbers3.filter(numb3 => numb3 >= 0);
console.log(filtered);

let numbers4 = [2, 3, 1, -4];
let items2 = numbers4
    .filter(numb4 => numb4 >= 0)
    .map(numb4 => {
        return { valeu: numb4 };
    })
    .filter(obj => obj.valeu > 1);
// let items = filtered1.map(numb4 => '\n<li>' + numb4 + 'n\</li>');
// let HTML = '<ul>' + items.join('') + '\n</ul>';
// console.log(items);
console.log(items2);

// 39-dars

// sonlarni qo'shish

let numbers5 = [8, 60, 500];
// let sum = 0;
// for (let numb5 of numbers5)
//     sum +=numb5;

let sum = numbers5.reduce((accumulator, currentValeu) =>
    accumulator + currentValeu, 0);

console.log(sum);

// amaliy mashg'ulot

let array = [1, 500, 800];

let finder = includes(array, 800);

//array - to'plam
function includes(array, elementToFind) {
    for (let element of array)
        if (element === elementToFind)
            return true;
    return false;
};
console.log(finder);

//*10 /5 *2 *100 /50 /2 *12

let SumOFnumber = 2541852460512 / 12 * 2 * 50 / 100 / 2 * 5 / 10;

console.log(SumOFnumber);

let numbers7 = [1, 2, 3, 4];
let output = move(numbers7, 0, 5);

console.log(output);

function move(array, index, offset) {

    let position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset')
        return;
    };
    let resul7 = [...array];
    let element = resul7.splice(index, 1)[0];
    resul7.splice(index + offset, 0, element);
    return resul7;
};

let numbers10 = [1, 2, 3, 4, 5];
let maxNumber10 = getMaxNumber(numbers10);
function getMaxNumber(array) {
    if (array.length === 0)
        return undefined;

    // let maxNumber = array[0];
    // for (let i = 1; i < array.length; i++)
    //     if(array[i] > maxNumber)
    //         maxNumber = array[i];

    array.reduce((a, b) => (a > b) ? a : b)
};

// Amaliy mashg'ulot

// let circle1 = {radius: 2};

// function conculateArea(){

//     let area = circle1.radius * circle1.radius * 3.14;

//     console.log(area);
// }

// conculateArea(); 

let circle1 = {
    radius: 2,
    get area() {
        return Math.floor(Math.PI * Math.sqrt(this.radius));
    }
};

console.log('taxminan Area of circle' + circle1.area);

// 2-mashq

let personJson = '{ age: 30 }';
try {
    let person = JSON.perse(personJson);

    if (!person.name)
        throw new Error('Name is not found')
}
catch (e) {
    console.log('Xato: Name is not found');
}

