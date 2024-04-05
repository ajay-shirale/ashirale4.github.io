var  firebaseConfig = {
  apiKey: "AIzaSyC16izOc-SFwMdw-kBtloSbeYj_qFU09qM",
  authDomain: "backyard-d9e83.firebaseapp.com",
  databaseURL: "https://backyard-d9e83-default-rtdb.firebaseio.com",
  projectId: "backyard-d9e83",
  storageBucket: "backyard-d9e83.appspot.com",
  messagingSenderId: "816339018282",
  appId: "1:816339018282:web:d0053a0ff3b015f5e49953",
  measurementId: "G-ZQ40TGQYQN"
};

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref('bookingForm');

const usersRef = dbRef.child('bookingForm');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

let user = snap.val();

let $li = document.createElement("li");
$li.innerHTML = user.name;

$li.setAttribute("child-key", snap.key);
$li.addEventListener("click", userClicked)
userListUI.append($li);
});

function userClicked(e) {

var userID = e.target.getAttribute("child-key");

const userRef = dbRef.child('bookingForm/' + userID);
const userDetailUI = document.getElementById("userDetail");

userDetailUI.innerHTML = ""

userRef.on("child_added", snap => {
 

var $p = document.createElement("p");

$p.innerHTML = snap.key + " - " + snap.val()
userDetailUI.append($p);

});

}

