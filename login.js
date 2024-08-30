const validUsername = "user123";
const validPassword = "password123";

function checkCredentials() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");
    console.log("Entered Username: ", username);
    console.log("Entered Password: ", password);
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        return true;
    } else {
        errorMsg.textContent = "Invalid username or password.";
        return false;
    }
}

