import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_ID,
}

const app = initializeApp(firebaseConfig)

const saveData = (data, recId) => {
  const stringData = JSON.stringify(data)
  const db = getDatabase()
  const reference = ref(db, 'recipies/' + recId)

  set(reference, {
    username: 'Test',
    ingredients: stringData,
  })
    .then((response) => console.log('ok: ' + response))
    .catch((error) => console.log('Error:' + error))
}

export default saveData
