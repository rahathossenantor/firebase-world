import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
// import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import app from './firebase/firebase.config';

function App() {
  // const auth = getAuth(app);
  // const googleProvider = new GoogleAuthProvider();
  // const gitHubProvider = new GithubAuthProvider();

  // const handleGoogleLogIn = () => {
  //   signInWithPopup(auth, googleProvider)
  //   .then(res => console.log(res.user))
  //   .catch(err => console.log(err.message));
  // };

  // const handleGitHubLogIn = () => {
  //   signInWithPopup(auth, gitHubProvider)
  //   .then(res => console.log(res.user))
  //   .catch(err => console.log(err.message));
  // };

  return (
    <>
    {/* <div className='py-10 flex items-center justify-center gap-5'>
      <button className='btn btn-primary normal-case' onClick={handleGoogleLogIn}>Log in with Google</button>
      <button className='btn btn-primary normal-case' onClick={handleGitHubLogIn}>Log in with GitHub</button>
    </div> */}
    <Navbar></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default App
