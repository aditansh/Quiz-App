import axios from "axios";
import React, { useEffect, useRef } from "react";

function Welcome(props) {
  const inputref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.startQuiz(inputref.current.value);
  };

  // let name="";
  // useEffect(() => {
  //   const getName = async() => {
  //     const res = await fetch("localhost:8000");
  //     name = await res.json();
  //     console.log(name);
  //   }
  // });

  return (
    <>
      <div className="flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full h-full max-w-md space-y-8 border rounded-2xl p-4 backdrop-blur-[2px]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-center text-white text-2xl">Enter Your Name</h1>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">Your Name</label>
                <input
                  ref={inputref}
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Start Quiz
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Welcome;
