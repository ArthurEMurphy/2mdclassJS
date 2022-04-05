//Exercise
// creat a simple login using the prompt

// // 1 get from the prompt and store the var email.
// let userEmail=prompt("Enter your email: ");
// console.log("Valid email");
// // 2 get from the prompt and store the var password.
// let password = prompt("Enter your password: ");
// // 3 display on the console the values (email and password)
// console.log(userEmail, password);
// // 4 create an "if" statement to know if the email equals to admin@admin.com and the pass should be Test1234
// if(userEmail=="admin@admin.com" && password=="Test1234"){
    
//     document.write("Welcome" + userEmail);
// // 5 if the email and the pass are correct you should display on the HTML the next message 
// // Welcome + email
// document.write("Welcome" + userEmail);
// }else{
//     document.write("Invalid credential")
// }
// // 6 if the credentials are not correct you should display on the console
// // invalid credentials

let userEmail=prompt("Enter your email: ");
let password = prompt("Enter your password: ");
console.log(userEmail, password);
if(userEmail=="admin@admin.com" && password=="Test1234"){
    document.write("Welcome" + userEmail);
}else{
    document.write("Invalid credential")
}


