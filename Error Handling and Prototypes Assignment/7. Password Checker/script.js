/*7. Password Checker.
Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message.
*/

const pattern = /^(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/gm;  //RegEx Pattern

// Class

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  //Setter
  setPassword(newPassword) {
    if (pattern.test(newPassword)) {
      this.password = newPassword;
    } else {
      console.log(
        "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }

  //Getter
  getPassword() {
    return this.password.replace(/./gi, "*");
  }
}

const user = new User("Pankaj", "Password123");
console.log(user.getPassword());

user.setPassword("myPassword");
user.setPassword("MyPassword");

user.setPassword("myPassword123");
console.log(user.getPassword());
