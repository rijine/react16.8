import FirebaseConfig from '../constants/firebase';
import * as app from 'firebase';

class Firebase {
  constructor() {
    app.initializeApp(FirebaseConfig);
  }
}

export default Firebase;
