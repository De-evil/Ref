import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext} from '../Context/AuthProvider'
import googlelog from '../assets/Images/download.png'

const SignUp = () => {
    const {createUser, loginWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState("error");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname ||  "/";
    const handleSignUp = (event)=> {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        createUser(email, password).then((userCredential)=> {
            const user = userCredential.user;
            alert("SignUp Successfully");
            navigate(from, {replace: true})
        })
        .catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;    
            setError(errorMessage)    
        });
    }

    // signup using google accounts 
    
    const handleRegister = ()=> {
        loginWithGoogle().then((result) => {
            const user  = result.user;
            alert("Login Successfully");
            navigate(from, {replace: true})
        }).catch((error)=> {
            const errorCode = error.code;
            const errorMessage = error.message;    
            setError(errorMessage)    
        });

    }
  return (
    <div classNameName="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div classNameName="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			classNameName="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div classNameName="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div classNameName="max-w-md mx-auto">
				<div>
					<h1 classNameName="text-2xl font-semibold">SignUp Form </h1>
				</div>
				<div classNameName="divide-y divide-gray-200">
					<form  onSubmit={handleSignUp}classNameName="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div classNameName="relative">
							<input 
                             id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							
						</div>
						<div className="relative">
							<input id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
					
						</div>
                        <p>If you have an account. Please<Link to='SignUp'classNameName='text-blue-600 underline' >SignUp</Link>Here</p>
						<div className="relative">
							<button classNameName="bg-blue-500 text-white rounded-md px-6 py-2">Submit</button>
						</div>
					</form>
				</div>
                <hr/>
                <div className='flex w-full items-center flex-col mt-5 gap-5'>
                    <button onClick={handleRegister} className='block'><img src={googlelog} alt='' className='w-12 h-12 inline-block'/>Login with Google</button>
                </div>
			</div>
		</div>
	</div>
</div>
  )
}

export default SignUp