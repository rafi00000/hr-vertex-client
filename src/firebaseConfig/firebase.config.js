// Import dotenv and load environment variables

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAl0hUKkh3rGA_nhVWXH9q6Fh3zV1inLME',
  authDomain: 'hr-vertex.firebaseapp.com',
  projectId: 'hr-vertex',
  storageBucket: 'hr-vertex.appspot.com',
  messagingSenderId: '604430136730',
  appId: '1:604430136730:web:8f6523c3ed575bb379b623',
};

// Log the API key to verify that it's correctly loaded

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
