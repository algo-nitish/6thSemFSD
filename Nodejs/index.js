// const fs = require("fs");

// // write files
// fs.writeFileSync("hello1.txt", "Hello Abes College");
// fs.writeFileSync("hello2.txt", "Hello Abes College");
// fs.writeFileSync("hello3.txt", "Hello Abes College");

// // async write
// fs.writeFile("hello4.txt", "Hello Abes College", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("hello4.txt created");
//   }
// });

// // read file
// fs.readFile("abes.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//   }
// });

// // append file
// fs.appendFileSync("abes.txt", " PHD");

// // append file async

// fs.appendFile("hello.txt", " PHD", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Data appended successfully");
//   }
// });

// //copy file
// fs.copyFileSync("hello1.txt", "hello5.txt");
// fs.cpSync("hello2.txt", "hello6.txt");


// //  Sync Version delete file
// try {
//   fs.unlinkSync("./abes/txt");
//   console.log("File deleted successfully (Sync)");
// } catch (err) {
//   console.log("Error deleting file:", err.message);
// }

// //Async Version delete file
// fs.unlink("./hello3.txt", (err) => {  
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File deleted successfully (Async)");
//   }
// });

//New Concept of Nodejs

//OS module

const os = require("os");



console.log("System Platform:", os.platform());
console.log("User Info:", os.userInfo());
 console.log("cpu architecture:", os.arch());
console.log("free memory:", os.freemem());
console.log("total memory:", os.totalmem());
console.log("uptime:", os.uptime());
console.log("Home Directory :", os.homedir());
console.log("Host Name:", os.hostname());