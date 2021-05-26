//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
