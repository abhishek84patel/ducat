
// // name = "abhishek patel"
// // var name = "abhishek"
// var name = "abhishek"
// function user() {
//     // name = "abhi"
//     return {

//         name: 'javascript',
//         ref: function () {
//             return this.name
//         }
//     }
// }
// let output = user();
// console.dir(output)
// console.log(output.ref());
// // document.write("hello")
// // // if (true) console.log(name)
// const person = function () {
//     return {
//         firstName: "John",
//         lastName: "Doe",
//         id: 5566,
//         fullName: function () {
//             return this.firstName + " " + this.lastName;
//         }
//     }
// };
// console.log(person().fullName())
// // console.log(person.firstName)


// example 1
// const user = {
//     fistName: "abhi",
//     lastName: "patel",
//     fullname: function () {
//         console.log(this)
//         return inner
//         function inner() {
//             console.log(this) // its refer of global object that means window object
//         }
//     }


// }

// example 2
// const h1 = document.querySelectorAll("h1");
// h1.forEach((e)=>
// e.addEventListener("click", function (e) {
//     // console.log(this)
//     console.log(e.target)
//     console.log(e.currentTarget)
// })
// )

// Q 3
// debugger
// console.log("hi")
// for (let i = 0; i <= 5; ++i) {
//     setTimeout(() => {
//         console.log(i)
//     } , 200)
// }


// const obj = {
//     name: "abhi"
// }
// console.log(obj.name)
// obj.name = "prafull ,"
// console.log(obj.name)


// const abhishek = [2, 3, 4,]
// abhishek[0]="abhishek"
// let b = [...abhishek]
// function hi() {

// }
// const p=document.querySelector("p")