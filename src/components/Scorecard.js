import React from "react";

function Scorecard(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen text-white">
        <p className="text-6xl">Hey, {props.username}</p>
        <br />
        <p className="text-4xl">You scored: {props.points}/10</p>
        <button
          onClick={props.newQuiz}
          type="submit"
          className="group relative flex mt-16 justify-center rounded-md border border-transparent bg-slate-600 py-2 px-4 text-xl font-medium text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          New Quiz?
        </button>
      </div>
    </>
  );
}

export default Scorecard;
