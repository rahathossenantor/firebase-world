import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    const [isShow, setIsShow] = useState(false);
    const [registerError, setRegisterError] = useState("");
    const [registerSucces, setRegisterSucces] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;
        const terms = e.target.terms.checked;
        
        console.log(email, pass, terms);

        // resetting status
        setRegisterError("");
        setRegisterSucces("");

        if (pass.length < 6) {
            setRegisterError("Your password must be at least 6 characters or more!");
            return;
        }

        if (!terms) {
            setRegisterError("Please accept our terms and conditions!");
            return;
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then((res) => {
                sendEmailVerification(res.user);
                alert("Verification email sent!");
                setRegisterSucces("User created succesfully!");
            })
            .catch(err => setRegisterError(err.message));
    }

    return (
        <div className="hero py-40 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now, It&apos;s free!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative form-control">
                                    <input required type={isShow ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" />
                                    <span onClick={() => setIsShow(!isShow)} className="absolute h-full flex items-center top-0 right-3 cursor-pointer">{isShow ? <FaEyeSlash className="text-xl"></FaEyeSlash> : <FaEye className="text-xl"></FaEye>}</span>
                                </div>
                                <p href="" className="label-text-alt text-base">Already have an acount? <Link to="/login"><a href="" className="link link-hover">Log In</a></Link></p>
                                <div className="mt-3">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label className="ml-2" htmlFor="terms">Accept our terms & conditions</label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Creat acount</button>
                            </div>
                            {
                                registerSucces && <div><p className="text-green-500">{registerSucces}</p></div>
                            }
                            {
                                registerError && <div><p className="text-red-500">{registerError}</p></div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;