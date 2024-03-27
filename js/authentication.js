const firebaseConfig = {
  apiKey: "AIzaSyBnrq9d9i8_6HFxFLW2YIN8qqPIYxBTolE",
  authDomain: "mazetu-1dd25.firebaseapp.com",
  projectId: "mazetu-1dd25",
  storageBucket: "mazetu-1dd25.appspot.com",
  messagingSenderId: "224310913703",
  appId: "1:224310913703:web:3d5ef93a791f33567b0982",
  measurementId: "G-HGEML75H67"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log("logged in");
    
        const mkoolima_user = firebase.auth().currentUser;
        //what will displayed on the header
        var jina = mkoolima_user.displayName;
        
        var photo = mkoolima_user.photoURL;
    
        if (jina === null){
        //if no dispaly name, we use the email address
        jina = mkoolima_user.email;
        }
        $('#user_profile').html(jina);
        if (photo != null){
            //use the google photo
            $("#avatar").attr("hidden", true);
            $("#user_photo").attr("hidden", false);
            $("#user_photo").attr("src", photo);
        }
    } else {
        console.log("Not logged in");
        window.location.replace("login.html");
    }
    });
});
