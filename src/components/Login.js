import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();

  const handleButtonClick = () => {
    let message = checkValidateData(
      email.current.value,
      password.current.value
    );
    console.log(email.current.value);
    console.log(password.current.value);
    setErrorMessage(message);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background img"
        />
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className=" font-bold text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            placeholder="Full name"
            type="text"
            className="p-4 my-4 w-full bg-gray-900 rounded-lg"
          />
        )}
        <input
          ref={email}
          placeholder="Enter email"
          type="text"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <input
          ref={password}
          placeholder="Password"
          type="password"
          className="p-4 my-4 w-full bg-gray-900 rounded-lg"
        />
        <p className="text-red-700">{errorMessage}</p>
        <button
          className=" p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="py-5 cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign up now "
            : "Already has a account ? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
