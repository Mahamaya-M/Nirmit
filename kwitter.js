function login() {
    name1 = document.getElementById("username1").value;
    localStorage.setItem("user_name", name1);
    window.location = "kwitter_room.html";
}