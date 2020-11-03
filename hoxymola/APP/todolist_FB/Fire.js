import firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAETV5wdF_NwhXyqbSgElblypr3DEetKZs",
  authDomain: "todolist-f6e33.firebaseapp.com",
  databaseURL: "https://todolist-f6e33.firebaseio.com",
  projectId: "todolist-f6e33",
  storageBucket: "todolist-f6e33.appspot.com",
  messagingSenderId: "1037524118374",
  appId: "1:1037524118374:web:8925c7154041549c07f6a7"
}

class Fire {
  constructor(callback) {
    this.init(callback)
  }

  init(callback) {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback(null, user)
      } else {
        firebase
          .auth()
          .signInAnonymously()
          .catch(error => {
            callback(error)
          });
      }
    });
  }

  getLists(callback) {
    let ref = this.ref.orderBy('name');

    this.unsubscribe = ref.onSnapshot(snapshot => {
      lists = [];

      snapshot.forEach(doc => {
        lists.push({id: doc.id, ...doc.data()})
      });

      callback(lists);
    });
  }

  addList(list) {
    let ref = this.ref

    ref.add(list);
  }

  updateList(list) {
    let ref = this.ref
    ref.doc(list.id).update(list);
  }

  get userId() {
    return firebase.auth().currentUser.uid
  }

  get ref() {
    return firebase
    .firestore()
    .collection('users')
    .doc(this.userId)
    .collection('lists');
  }

  detach() {
    this.unsubscribe();
  }
}

export default Fire;