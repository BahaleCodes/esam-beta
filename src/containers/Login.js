// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { LockClosedIcon } from '@heroicons/react/solid'
import '../components/styles/Login.css';
import Auth from '../components/widgets/Auth';
// import SignInForm from '../components/widgets/SignInForm';
// import SignUpForm from '../components/widgets/SignUpForm'
function Login() {
  // const [formState, setFormState] = useState("Login");
  // const handleFormState = () => {
  //   if (formState == "Login") {
  //     setFormState("Register")
  //   }
  //   else {
  //     setFormState("Login")
  //   }
  // }
  return (
    <>
      <div bg-slate-100 className="min-h-full mt-4 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto mt-4 h-12 w-auto"
              src={"/assets/img/logo.png"}
              alt="Workflow"
            />
            <div>
              <Auth/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login
