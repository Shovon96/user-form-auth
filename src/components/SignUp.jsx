import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../FireBase/firebase.config";
import { useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SignUp = () => {
    // stats
    const [regError, setRegError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowpassword] = useState(false)

    const handleSignUp = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const termsChecked = event.target.terms.checked
        console.log(email, password);

        // clear states (error and success message)
        setRegError('')
        setSuccess('')

        if (password.length < 6) {
            setRegError('Password should be must 6 charecter or longer!')
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password)) {
            setRegError('Password should used must be at least one uppercase charecter and one number added')
            return;
        }
        else if(!termsChecked){
            setRegError('Please accept out terms and conditions!')
            return;
        }

        // get and set user email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                // send user varification email
                sendEmailVerification(user)
                .then(() =>{
                    alert("Please check your email and verified your email")
                })
                
                setSuccess('User Created Successfully!')
            })
            .catch(error => {
                setRegError(error.message)
                // console.log(error)
            })
    }

    return (
        <div>
            <div className="bg-gray-300 h-[80vh] flex items-center justify-center">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h2 className="text-4xl text-center text-rose-600 font-bold mb-6">Sign Up</h2>

                    {/* Form */}
                    <form onSubmit={handleSignUp}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" placeholder="Type Email@...." required className="w-full px-3 py-2 border rounded-md" />
                        </div>

                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <div className="flex items-center">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password" placeholder="Type Password..." required
                                    className="w-full px-3 py-2 border rounded-md relative" />
                                <span className=" absolute ml-72" onClick={() => setShowpassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye title="Hide"></FaEye> : <FaEyeSlash title="Show"></FaEyeSlash>
                                    }
                                </span>
                            </div>
                        </div>

                        {/* Terms and conditon */}
                        <div className="mb-3">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-2" htmlFor="terms">Accept our <a className=" text-blue-600 underline" href="">terms and condition</a></label>
                        </div>

                        {/* Sign In Button */}
                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                            Sign Up
                        </button>
                    </form>
                    {/* set success message in form */}
                    {
                        success && <p className="text-green-600">{success}</p>
                    }

                    {/* error message set in form */}
                    {
                        regError && <p className=" text-red-700 text-sm">{regError}</p>
                    }
                        <p className="mt-4">Already you have an account? Go <Link to='/signin' className="text-green-600 underline">SignIn</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;