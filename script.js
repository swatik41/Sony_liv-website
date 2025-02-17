    function searchicon() {
    let query =
    document.getElementById("searchInput").value;
    if (query) {
        alert("you serched for: " + query);
    }else {
        alert("please enter a search term.");
    }
}   

//Login form

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("message");

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        message.style.color = "green";
        message.textContent = "Login successfully!";
    }else{
        message.style.color = "red";
        message.textContent = "Invalid Username or password!";

    }
    document.getElementById("loginForm").reset();
    });


