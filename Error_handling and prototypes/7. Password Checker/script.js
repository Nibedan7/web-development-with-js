class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return this._password.replace(/./g, '*');
  }

  set password(newPassword) {
    const hasNumber = /\d/.test(newPassword);
    const hasUppercase = /[A-Z]/.test(newPassword);

    if (newPassword.length >= 8 && hasNumber && hasUppercase) {
      this._password = newPassword;
    } else {
      console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
    }
  }
}

// Instantiate a User object with a password
const user1 = new User('user1', 'Pa$$w0rd');

// Log the password (using the getter method)
console.log(user1.password); // Output: ********

// Set a new valid password (using the setter method)
user1.password = 'NewPa$$word123';

// Log the new password (using the getter method)
console.log(user1.password); // Output: ********

// Set a new invalid password (using the setter method)
user1.password = 'short';

// Error message will be logged to the console
