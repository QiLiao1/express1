// var apple = 20;
// var orange = "橘子";

// let lemon = "柠檬";
// let banana = 30;

// const pear = 40;

// var apple1 = {}

// console.log(typeof apple1)
// var apple2 = Object.create(null);
// console.log(typeof apple2 + "    apple2 ");

// // var apple3 = function() {
// //     console.log("This is apple3");
// // }
// // function smallApple(){
// //     console.log("This is small apple")
// // }
// // apple3();
// // // bigApple();
// // smallApple();


// var apple4 = function () {
//     console.log("This is apple3 ba")
// }
// apple4()


// // var apple5=()=>{
// //     console.log("this is arrow function")
// // }
// // apple5()

// // var apple6 = () =>
// //     console.log("this is arrow function")

// // apple6()

// // var apple7 = () =>()=>console.log("this is arrow function apple7")


// // apple7() ()

// var apple8 = () => {
//     return () => {
//         console.log("this is arrow function apple8")
//     }
// }
// apple8()()

// var apple9 = () => {
//     return () => {
//         return () => {
//             console.log("this is arrow function apple9");
//         }
//     }
// }
// apple9()()();

// var apple10 = (x, y) => {
//     console.log("this is  apple10    ==    " + (x + y));
//     return (x, y) => {
//         console.log("this is  apple10-1     ==     " + (x + y))
//     }
// }
// apple10();
// apple10(1, 12)(11, 45);

// var apple12 = () => console.log("10");
// console.log("13");

// apple12();

// var apple13=function(){
// var name = "苹果13";
//     function apple13son() {
//         console.log("this is apple13 son")
//     }
//     // apple13son();
//     console.log("this is apple13")
//     return{
//         apple13son1:apple13son
//     }
// }
// // apple13();
// apple13().apple13son1();



var apple14 = function () {
    console.log("this is apple14……")
    return 100;
}()


console.log(apple14)

