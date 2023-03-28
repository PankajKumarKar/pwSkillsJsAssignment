/*Write a JavaScript program that checks if the entered password matches the confirmed password. If the
passwords match, the program should log "Password Matched. Password validation Successful." to the console.
Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console.
*/ 

let password=prompt("Enter Password");
let confirmPassword=prompt("Enter Confirm Password");

// validation code

if(password===confirmPassword){
    console.log("Password Matched ! Password validation Successful.");
}else{
    console.log("Password didn't match ! Password validation unsuccessful.");
}