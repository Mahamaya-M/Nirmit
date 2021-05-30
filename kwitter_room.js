var firebaseConfig = {
      apiKey: "AIzaSyArKh0ZqKxVdcn6f5wdtIWXaZQ4hsIpVdc",
      authDomain: "kwitter-c36d4.firebaseapp.com",
      databaseURL: "https://kwitter-c36d4-default-rtdb.firebaseio.com",
      projectId: "kwitter-c36d4",
      storageBucket: "kwitter-c36d4.appspot.com",
      messagingSenderId: "855402342487",
      appId: "1:855402342487:web:1e29cd2e9bc2a856b19b12"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("welcome_name").innerHTML = "Welcome " + user_name;

function newroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}