
import { initializeApp , getApp ,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu7AG1lOSEIkwIGuxAlUHo5SfpDVpOmoY",
  authDomain: "fir-auth-demo-b09aa.firebaseapp.com",
  projectId: "fir-auth-demo-b09aa",
  storageBucket: "fir-auth-demo-b09aa.firebasestorage.app",
  messagingSenderId: "770577292014",
  appId: "1:770577292014:web:750a1b94ca51cc089a31ff"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()


const auth = getAuth(app)


export {auth}
