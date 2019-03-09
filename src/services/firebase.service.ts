import FirebaseConfig from '../constants/firebase';
import * as firebaseApp from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class Firebase {
  private static _instance: Firebase;
  public readonly firebase: firebaseApp.app.App;
  public readonly firestore: firebaseApp.firestore.Firestore;

  private constructor() {
    this.firebase = firebaseApp.initializeApp(FirebaseConfig);
    this.firestore = firebaseApp.firestore();
  }

  // getUsers() {
  //   return this.firestore;
  // }

  public static get instance(): Firebase {
    if (!this._instance) {
      this._instance = new Firebase();
    }
    return this._instance;
  }
}

export default Firebase;
