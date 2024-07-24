//    2024/07/24 Event LOOP and CallBack function

const { rejects } = require("assert");
const { resolve } = require("path");

// 1# Evenet loopiz
// Node JS - single thread (kam harajat)

// console.log("Jek Ma Maslahatlari");
// const list = [
//   "Yaxshi taalaba bo'ling", // 20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "O'zing uchun  ishlang", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling", //40-50
//   "Yoshlarga inveestitsiya qiling", // 50-60
//   "Ko'proq sayohat qiling", // 60-70
// ];
// function giveMaslahat(a, callback) {
//   if (typeof a != "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 3000);
//   }
// }
// console.log("pass 0");
// giveMaslahat(90, (err, data) => {
//   if (err) console.log("ERORR:", err);
//   else {
//     console.log("Javob:", data);
//   }
// });
// console.log("pass 1");

// // 2024/07/24

// // #2 Asyncrone  Functions
// console.log("Jek Ma Maslahatlari");
// const list = [
//   "Yaxshi taalaba bo'ling", // 20
//   "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
//   "O'zing uchun  ishlang", // 30-40
//   "Siz kuchli bo'lgan narsalarni qiling", //40-50
//   "Yoshlarga inveestitsiya qiling", // 50-60
//   "Ko'proq sayohat qiling", // 60-70
// ];
// async function giveMaslahat(a) {
//   if (typeof a != "number") throw new Error("Insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
//   }
// }
// // call qismida async functiondan foydalandik
// async function run() {
//   let j = await giveMaslahat(21);
//   console.log(j);
//   j = await giveMaslahat(80);
//   console.log(j);
// }
// run();

// call qismida then/catch ni ishlatdik
// console.log("pass 0");

// giveMaslahat(30)
//   .then((data) => {
//     console.log("J:", data);
//   })
//   .catch((err) => {
//     console.log("erorr:", err);
//   });
// console.log("pass 1");

// 2024/07/24

// #2 Promise Functions
console.log("Jek Ma Maslahatlari");
const list = [
  "Yaxshi taalaba bo'ling", // 20
  "To'g'ri boshliq tanlang va ko'proq xato qiling", //20-30
  "O'zing uchun  ishlang", // 30-40
  "Siz kuchli bo'lgan narsalarni qiling", //40-50
  "Yoshlarga inveestitsiya qiling", // 50-60
  "Ko'proq sayohat qiling", // 60-70
];
async function giveMaslahat(a) {
  if (typeof a != "number") throw new Error("Insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 3000);
    });
  }
}
// call qismida async functiondan foydalandik
async function run() {
  let j = await giveMaslahat(80);
  console.log(j);
  j = await giveMaslahat(10);
  console.log(j);
}
run();
