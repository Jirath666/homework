// LAB 1 
// let i = 3;

// while (i) {
//   alert(i--);
// }
// Ans alert 3 2 1


// LAB 2

// let i = 0;
// while (++i < 5) alert(i);
// ans 4

// let i = 0;
// while (i++ < 5) alert(i);
// ans 5



// LAB 3
// for (i = 0; i <=100; i++){
//     if(i%2===1){
//         continue;
//     }
//     console.log(i);
// }


// let i = 0;
// while(i<=100){
//     console.log(i);
//     i+=2;
// }

// let i = 0;
// while(i<=100){
//     if(i%2===0)
//     console.log(i);
//     i++;
// }

//////////////////////////////////////////////////////
// LAB 4.1
// let sum = 0;
// for (i=0; i<=100; i++){
//     (sum = sum+i)
//     console.log(sum);
// }

// LAB 4.2.1
// let sum = 0;
// for(i=0; i<=100; i++){
//     if(i%2===0)
//     (sum = sum+i)
//     console.log(sum);
// }

//LAB 4.2.2
// let sum = 0;
// for(i=0; i<=100; i++){
//     if(i%2===1)
//     (sum = sum+i)
//     console.log(sum);
// }
////////////////////////////////////////////////////

// Lab 4
// let sum = 0;
// let sumEven = 0;
// let sumOdd = 0;
// let sumFinal = 0;
// let sumSquareTwo = 0;
// let sumSquareThree = 0;

// // for (let i = 1; i <= 100; i++) {
// //     sum += i;

// //     if (i % 2 === 0) {
// //         sumEven += i;
// //         sumSquareTwo += i ** 2;
// //     }else {
// //         sumOdd += i;
// //     }
    
// //     if (i % 3 === 0){
// //         sumSquareThree += i ** 2;
// //     }
// // }

// // console.log(sum);
// // console.log(sumEven);
// // console.log(sumOdd);
// // console.log(sumSquareTwo - sumSquareThree);

// for (let i = 1; i <= 100; i++) {
//     sum += i;

//     if (i % 2 === 0) {
//         sumEven += i;
//         if (i % 6 !== 0){
//             sumFinal += i ** 2;
//         }
//     }else {
//         sumOdd += i;
//     }
    
//     if (i % 3 === 0 && i % 6 !== 0){
//         sumSquareThree -= i ** 2;
//     }
// }

// console.log(sum);
// console.log(sumEven);
// console.log(sumOdd);
// console.log(sumFinal);

// LAB 5
// let sum = 100000;
// for (let i = 0; i < 10; i++){
//     sum = (sum*2.5)/100 + sum;
//     // sum = (1+0.025) * sum;
// }
// console.log(sum.toFixed(2));





// LAB 7
// let a
// let number = prompt('enter you number ');
// for (i=1;i<=12;i++){
//     (a = number * i)
//     continue;
// }
// console.log(a);

// LAB 8
