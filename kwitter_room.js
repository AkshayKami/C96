var firebaseConfig = {
  apiKey: "AIzaSyC61N3ysUIVXQxcmorSItTEBQ2ydEwBGmQ",
  authDomain: "kwitter-8c605.firebaseapp.com",
  databaseURL: "https://kwitter-8c605-default-rtdb.firebaseio.com",
  projectId: "kwitter-8c605",
  storageBucket: "kwitter-8c605.appspot.com",
  messagingSenderId: "710271611680",
  appId: "1:710271611680:web:6800ce35e4dbb178241d45"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
// document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

 function addRoom() {
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
     });
     localStorage.setItem("room_name", room_name);
     window.location= "kwitter_room.html";
}

function getData() 
{  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}
 
 getData();

 function redirectToRoomName(name)
 {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
 }

 function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "kwitter.html";
 }