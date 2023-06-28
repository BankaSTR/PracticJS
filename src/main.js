// function getType(arg_type) {
//   return typeof arg_type;
// }

// console.log(getType(undefined));  // "undefined"
// console.log(getType(5));  // "number"
// console.log(getType("Kirill"));  // "string"
// console.log(getType(null));  // "object"
// console.log(getType([5, 8, 9]));  // "object"
// console.log(getType(alert));  // "function"





// function summa(a, b, c, d, e) {

//   let summa = 0;

//   if (typeof a === 'number') {
//       summa += a;
//   }
//   if (typeof b === 'number') {
//       summam += b;
//   }
//   if (typeof c === 'number') {
//       summa += c;
//   }
//   if (typeof d === 'number') {
//       summa += d;
//   }
//   if (typeof e === 'number') {
//       summa += e;
//   }

//   return summa;
// }

// const result = summa(5, true, 5, 8, null);
// console.log(result);




// function summa(arguments) {
//   let sum = 0;

//   for (let i = 0; i < arguments.length; i++) {
//       if (typeof args[i] === 'number') {
//           sum += args[i];
//         }
//   }
//   return sum;
// }
// const summa_end = summa([5, true, 5, 8, null]);
// console.log(summa_end);





// function convertArrToObj(arr) {
//     const obj = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       obj[i] = arr[i];
//     }
  
//     return obj;
// }

// const arr = [1, null, 'test', undefined]
// const obj = convertArrToObj(arr);
// console.log(obj);






// function countFromArr(arr) {
//   const countObj = {};

//   for (let i = 0; i < arr.length; i++) {

//     const object = arr[i];

//     if (countObj[object]) {
//       countObj[object] += 1;
//     } 
    
//     else {
//       countObj[object] = 1;
//     }
//   }

//   return countObj;
// }

// const arr = [1, 1, 1, 1, 1, 'test', 'test'];
// const res = countFromArr(arr);
// console.log(res);







// function groupByField(arr, field) {
//   const groupedObj = {};

//   for (let i = 0; i < arr.length; i++) {
//     const object = arr[i];
//     const obj_value = object[field];

//     if (groupedObj[obj_value] === undefined) {
//       groupedObj[obj_value] = [];
//     }

//     groupedObj[obj_value].push(object);
//   }

//   return groupedObj;
// }

// const arr = [{test: 1}, {test: 2}, {test: 3}, {test: 1}, {test: 1}];
// const res = groupByField(arr, 'test');
// console.log(res);