
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNCVnUyZI0zvm2vylM_hptkBKxFFwap2c",
    authDomain: "kwitter-new-d3221.firebaseapp.com",
    databaseURL: "https://kwitter-new-d3221-default-rtdb.firebaseio.com",
    projectId: "kwitter-new-d3221",
    storageBucket: "kwitter-new-d3221.appspot.com",
    messagingSenderId: "687744168561",
    appId: "1:687744168561:web:b04e04dd2064dcc7d161d0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+ user_name;
    function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_name = childKey;
      //Start code
row = "<div class = 'room_name' id="+Room_name+ "onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(room){
localStorage.setItem("room_name",room);
window.location("kwitter_page.html");
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

