// LAB 1
// function sayHelloWorld() {
//     alert('Hello World');
// }
// sayHelloWorld();

// LAB 2 
// let userName = prompt('Enter your name');
// function sayHelloUser() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// sayHelloUser();

// LAB 3 
// let message = 'Welcome to Thailand';

// function logMessage(message) {
//   message = 'Hello everybody';
//   console.log(message); // * เพราะมีการใส่ค่า message ใน fuction
// }

// logMessage(message);
// console.log(message); // ** เพราะไม่มีการเรียกใช้ function

// let name = 'John';

// function sayHi(input) {
//   console.log(name); // *** เพราะมีการประกาศตัวแปรแบบ global
//   name = input;  
// }

// sayHi();
// console.log(name); // **** เพราะค่า name เป็น input หลังจากใช้งาน function

// LAB 4
// function sayHi(name) {
//     let name = 'Guest';
//     console.log(name); // * ERROR เพราะมีการประกาศ name ใน line37 แล้ว ไม่สามารถประกาศตัวแปรซ้ำเดิมได้
//   }
  
//   sayHi('Jim');

// LAB 5
// const sender = 'Matt';

// function sendTo(from, to) {
// console.log(`From ${from} to ${to}`); 
// }

// sendTo(sender, 'Sarah'); // * From Matt to Sarah เพราะ sender ถูกประกาศตัวแปรเป็น Matt และ Sarah ไปแทนค่าใน function ตอนเรียกใช้
// sendTo(null); // ** From null to undefine เพราะ null ขึ้นไปแทนค่าตรง ${from} และ ${to} ไม่ได้ถูกระบุจึงเป็น undefine


// const sender = 'Matt';

// function sendto(to, from = 'CC') {
//     console.log(`From ${from} to ${to}`);
// }

// sendto('Max'); //** From CC to Max : CC คือค่าเริ่มต้นของ from 
// sendto('Ben','Jay'); //*** From Jay to Ben

// LAB 6
// function number(a,b) {
//     return a * b;
// }
// let muti = number(2,2);
// alert(muti);

// let num1 = +prompt('enter you frist nummber');
// let num2 = +prompt('enter yor secend number');
// function muti(num1,num2){
//     alert(num1 * num2);
// }
// muti(num1,num2);

// LAB 7
// function min(a,b){
//     if (a < b ) {
//         return a;
//     } else{
//         return b;
//     }
// }


// function min(a,b) {
//     if (a < b) return a; 
//     return b;
// }

// function min(a,b){
//     return a < b ? a : b;
// }


// LAB 8 

// let username = prompt('enter username');
// let password = prompt('enter password');

// function login(username,password){
//     if(username === 'admin' && password ==='P@ssw0rd'){
//         return alert('Login Success');
//     }else{
//         return alert('Login Fail');
//     }
// }

// login(username,password);


// LAB 9



// LAB 10
// function squareNum(num) {
//     const result = num * num;
//   }
  
//   console.log(squareNum(2)); // * ไม่แสดงผล ไม่มีการ return


// LAB 1.11.1
// function sayHi(age) {
//     if (age < 12) alert('Hi kid');
//   }
// //   console.log(sayHi); // * ไม่แสดงผล
//   console.log(sayHi(10)); // ** Hi Kid เพราะ 10 น้อยกว่า 12

// // LAB 1.11.2function sayHi(name) {
//     if (name) {
//       alert('Hi ' + name);
//       return;
//     } else {
//       return 'Who are you';
//     }
//   }
//   console.log(sayHi('John')); // *** alert Gi John เพราะค่าแทน john ที่ตัวแปร name;
// //   console.log(sayHi()); // **** Who are you ไม่มีค่าแทย name จึงทำเงื่อนไขถัดไป


// LAB 12
// function getLongText() {
//     return
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
//   }  
//   console.log(getLongText()); // * undefine เพราะใส่ค่าว่างใน ();



// LAB 13
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }
  
// function checkAge(age){
//     if (age > 18) return console.log('true') ; return confirm('Did parents allow you?');
// }
// checkAge(18);

// function checkAge(age){
//     return age > 18 ? console.log('true') : confirm('Did parents allow you?');
// }
// checkAge(19);



// LAB 14
// function Max(num1,num2,num3,num4){

// }











// LAB 2.1
// const muti = function(a,b) {
//     return a * b;
// };
// console.log(muti);
// console.log(muti(7,17));


// LAB 2.2
// const showModal = alert;
// showModal('Execute modal'); // Execute modal 

// const showModal = alert();
// showModal('Execute modal'); // Error


// LAB 2.3
// function checkPermission (role,yes,no){
//     if (confirm(role)) yes();
//     else no();
// }
// function showYes(){
//     alert('ACCESS GRANTED.');
// }
// function showNo(){
//     alert('ACCESS DENIED.');
// }
// checkPermission('You are Admin?',showYes, showNo);


// LAB 2.4
function magic() {
    return function (x) {
        return x * 42;
    };
}
const answer = magic();
// console.log(answer); // ** ไม่แสดงผล
// console.log(answer(1337)); // 56154 เพราะใส่ค่า 1337 ในตัวแปร x 
 console.log(magic(1337)(42)); // 1764  เพราะ




// LAB 3.1
// let number = (a,b) => a * b;
// console.log(number(23,9));

// LAB 3.3
// const square = n => { 
//      n ** 2;
// };

// console.log(square(7)); // * Undefine เพราะไม่ return ใน function body

// const calcCircleArea = r => Math.PI * r ** 2;
// console.log(calcCircleArea(3)); // ** 28.27


// LAB 3.4
// const logName = (name) => console.log(name);
// const logName = name => console.log(name); // เหมือนกัน


// LAB 3.5
// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
//   ask('Do you agree?', 
//     function () { alert('You agreed.'); },
//     function () { alert('You canceled the execution.'); }
//   );

// let ask 



// // LAB 3.6
// const convertDayToSecond = day => day * 24 * 60 * 60;

// // LAB 3.7
// const modSeven = number => (number%7 === 0 ? true : false);
// //shoterversion
// //  const modSeven = number => number%7 === 0;


// LAB 3.8
// const calScore = score 