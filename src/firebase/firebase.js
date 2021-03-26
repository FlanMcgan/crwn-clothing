
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
  const  config = {
    apiKey: "AIzaSyBdd6b48aqQ8WkM7I6RcMDiHl8wu1EK2AY",
    authDomain: "crwn-db-7edb9.firebaseapp.com",
    projectId: "crwn-db-7edb9",
    storageBucket: "crwn-db-7edb9.appspot.com",
    messagingSenderId: "254007559737",
    appId: "1:254007559737:web:cf90052478cde419406fe8",
    measurementId: "G-94KE746YEK"
  };

export const createUserProfileDocument = async (userAuth, addionalData) =>{
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if (!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }

    return userRef;
  }
};



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promp:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;