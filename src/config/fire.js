import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAdUUF5WkA2sy-BtAoO59kyjtyuQJjJnsk",
    authDomain: "new-project-e7486.firebaseapp.com",
    databaseURL: "https://new-project-e7486.firebaseio.com",
    projectId: "new-project-e7486",
    storageBucket: "new-project-e7486.appspot.com",
    messagingSenderId: "134473850110",
    appId: "1:134473850110:web:113da0a6f70e80dd0419af"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire