import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyDxLEJxUWajTUH8pegqm4ZoZeehM6lEuko',
  authDomain: 'tripr-56117.firebaseapp.com',
  projectId: 'tripr-56117',
  storageBucket: 'tripr-56117.appspot.com',
  messagingSenderId: '842337251375',
  appId: '1:842337251375:web:3172203f36889b3273d6da',
  measurementId: 'G-NH9970P07Y',
}

var fire = firebase.initializeApp(firebaseConfig)

export default fire
