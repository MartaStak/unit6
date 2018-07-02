// for (let i = 100; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// let val = parseFloat(prompt('Enter A'));
// while (isNaN(val)) {
//     alert('Please enter a number');
//     val = parseFloat(prompt('Enter A'));
// }

// let val;
// do {
//     alert('Please enter a number');
//     val = Number(prompt('Enter Val')); 
// } while (isNaN(val));

// let products = ['Audi R8', 'Lambo Diablo'];
// products.push('Tesla Model X'); // 2
// products.push('Tesla Model S'); // 3
// products.push('Tesla Model 3'); // 4
// // alert(products[0]);
// products[0] = 'Ferrari LaFerrari';
// // alert(products[0]);
// products[30] = 'Chevrolet Corvette';
// // alert(products);

// // for (let i = 0; i < products.length; i++) {
// //     console.log(products[i]);
// // }

// products.forEach(function(element, idx){
//     console.log(++idx + ' ' + element);
// });


// Запитати в користувача п'ять чисел
// Записати їх в масив
let nums = [];
for (let i = 0; i < 5; i++) {
    nums.push(prompt('Enter A value'));
}
// Потім з масива послідовно вивести їх в консоль 
nums.forEach( el => console.log(el) );



