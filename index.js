// function to validate the password
function validatePassword(password1, password2){
    // check if pw match and check length if it has at least 8 char
    if (password1 != password2) return false;
    if (password1.length < 8) return false;

    // initialize 
    let hasNumber = false;
    let hasUppercase = false;
    let hasLowercase = false;

    // loop through each char of the pw
    for(let char in password1){
        // check if no
        if (!isNaN(char)) { 
            return hasNumber = true;
        // check if uppercase
        } else if (char >= "A" && char <= "Z") {
            return hasUppercase = true;
        // check if lowercase
        } else if (char >= "a" && char <= "z") {
            return hasLowercase = true
        }   
    return hasNumber && hasUppercase && hasLowercase;
    }
}

// function to reverse password
function reversePassword(password){
    let reversed = "";
    // password.length - 1 because of 0 indexing, decrement
    for(let i = password.length - 1; i >=0; i--){
        reversed += password[i];
    }
    return reversed;
}

// Function to store password
function storePassword(name, password1, password2){
    let newPassword;

    if (validatePassword(password1, password2)) { 
        newPassword = reversePassword(password1); // use reverse function
    } else {
        newPassword = password1; // if not valid, the value of newpw is the first pw
    }
    return{name: name, newpassword: newPassword};
}

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));
