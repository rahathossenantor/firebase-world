import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
    const [loginError, setLoginError] = useState("");
    const [loginSucces, setLoginSucces] = useState("");
    const [isShow, setIsShow] = useState(false);

    const emailRef = useRef(null);

    const handleLogIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        // resetting status
        setLoginError("");
        setLoginSucces("");

        signInWithEmailAndPassword(auth, email, pass)
            .then(res => {
                console.log(res.user);
                setLoginSucces("Login succesfull!");
            })
            .catch(err => {
                console.log(err);
                setLoginError(err.message);
            });
    }

    const handleResetPassword = () => {
        const email = emailRef.current.value;

        if (!email) {
            alert("Please enter your email!");
            return;
        }

        // resetting password
        sendPasswordResetEmail(auth, email)
            .then(() => alert("Email sent!"))
            .catch(err => alert(err.message));
    }

    return (
        <div className="hero py-40 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative form-control">
                                    <input required type={isShow ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" />
                                    <span onClick={() => setIsShow(!isShow)} className="absolute h-full flex items-center top-0 right-3 cursor-pointer">{isShow ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>}</span>
                                </div>
                                <label>
                                    <p href="" className="label-text-alt text-base">New to this website? <Link to="/register"><a href="" className="link link-hover">Register</a></Link></p>
                                    <p onClick={handleResetPassword} className="link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {
                                loginSucces && <div><p className="text-green-500">{loginSucces}</p></div>
                            }
                            {
                                loginError && <div><p className="text-red-500">{loginError}</p></div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;