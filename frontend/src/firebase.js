// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAQx5Xt8x2nS25_CIu_V_Qc--lkb5gtCVY',
  authDomain: 'proshop-6b3dd.firebaseapp.com',
  projectId: 'proshop-6b3dd',
  storageBucket: 'proshop-6b3dd.appspot.com',
  messagingSenderId: '53394082092',
  appId: '1:53394082092:web:90fd1e361d6ff1b8630489',
  measurementId: 'G-RMSVR1G2QZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
