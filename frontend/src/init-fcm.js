import * as firebase from 'firebase/app'
import 'firebase/messaging'

const initializedFirebaseApp = firebase.initializeApp({
  messagingSenderId: '53394082092',
})

const messaging = initializedFirebaseApp.messaging()

messaging.usePublicVapidKey(
  'BCG5ctr8vKA6ATGhW8twtj3nxGyiY4XszWQXnjmYZaFmvwM2iJyTizLSIMZ9k2uAqw-k4W5sbXXH7BXvDZ78Eqo'
)

export { messaging }
