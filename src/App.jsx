import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';

function App() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(res => console.log(res.user))
    .catch(err => console.log(err.message));
  };

  return (
    <>
    <div className='text-center py-10'>
      <button onClick={handleGoogleLogIn}>Log in with Google</button>
    </div>
    </>
  )
}

export default App
