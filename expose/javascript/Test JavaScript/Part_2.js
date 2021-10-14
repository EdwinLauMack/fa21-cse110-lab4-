// function discountPrices(prices, discount) {
//     const discounted = [];
//     const length = prices.length;

//     for (let i = 0; i < prices.length; i++) {
//         const discountedPrice = prices[i] * (1 - discount);
//         discounted.push(discountedPrice);
//     }

//     //console.log(i);

//     return discounted;
// }

// discountPrices([100,200,300], 0.5);


//Data Types

// let student = {
//     name: 'Edwin',
//     major: 'Computer Science',
//     'Grad Year' : '2023',
//     greeting: function() {console.log('Hello!'); },
//     'Favorite Teacher' : {
//         name: 'Thomas Powell',
//         course: 'CSE 110'
//     },

//     courseLoad: ['CSE110', 'CSE101', 'CSE151A', 'HIAF112']

// };


// console.log(student.name);
// console.log(student['Grad Year']);
// student.greeting();
// console.log(student['Favorite Teacher'].name);
// console.log(student.courseLoad[0]);

//Functions

// function modifyArray(array, callback) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++){
//         newArr.push(callback(array[i]));
//     }
//     return newArr;
// }

// function doSomething(num){
//     return num * 2;
// }

// console.log(modifyArray([1,2,3], doSomething));

//Question 19

function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log(4);
}

printNums();
