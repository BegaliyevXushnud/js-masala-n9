

// 47-masala
// function swapElements(arr, k) {
//     let new_arr = arr[k];
//     arr[k] = arr[arr.length - 1];
//     arr[arr.length - 1] = new_arr;
//     return arr;
// }
//
// console.log(swapElements([1, 2, 3, 4, 5], 2)); // [1, 2, 5, 4, 3]



// 48-masala
// function repeatElements(arr, n) {
//  let result = [];
//  arr.forEach(el => {
//      console.log()
//      for (let i = 0; i < n; i++) {
//          result.push(el)
//      }
//  })
//     return result
// }
//
// console.log(repeatElements([1, 2, 3], 3)); // [1, 1, 1, 2, 2, 2, 3, 3, 3]



// 49-masala
// function sumEvenIndexedElements(arr) {
//     let result = []
//     let sum = 0;
// arr.forEach((item,index) => {
//     if(item % 2 === 0){
//          sum += index;
//
//     }
// })
//     return sum
// }
//
// console.log(sumEvenIndexedElements([1, 2, 3, 4, 5, 6])); // 9 (1 + 3 + 5)






// 50-masala
// function uniqueElements(arr) {
//   let unikue = arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
//   return unikue
// }
//
// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]






// 51-masala
// function reverseStringsInArray(arr) {
//     return  arr.map(item => item.split("").reverse().join(""))
// }
//
// console.log(reverseStringsInArray(['abc', 'def', 'ghi'])); // ['cba', 'fed', 'ihg']




// 52-masala
// function rotateArrayLeft(arr, n) {
//   let res = arr.length;
//   n = n % res;
//   return arr.splice(n).concat(arr.slice(0,n));
// }
//
// console.log(rotateArrayLeft([1, 2, 3, 4, 5, 6, 7], 3)); // [4, 5, 6, 7, 1, 2, 3]