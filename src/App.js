import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import Scorecard from "./components/Scorecard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState([]);

  const fetch = async () => {
    var config = {
      method: "get",
      url: "//localhost:8000",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setQuestions(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  useEffect(()=>{
    fetch();
},[]);

  let [points, setPoints] = useState(0);
  let [step, setStep] = useState(0);
  let [start, setStart] = useState(false);
  let [username, setUsername] = useState("");
  let length = questions.length;

  const startQuiz = (username) => {
    setStart(true);
    setUsername(username);
  };

  const nextQuestion = (ans) => {
    if (ans) {
      setPoints(++points);
    }

    if (step < questions.length) {
      setStep(++step);
    }
  };

  const newQuiz = () => {
    setPoints(0);
    setStep(0);
    setStart(false);
    setUsername("");
  };

  if (step == questions.length) {
    return (
      <>
        <Navbar />
        <Scorecard points={points} username={username} newQuiz={newQuiz} />
      </>
    );
  }

  return (
    <>
      {start ? (
        <>
          <Navbar />
          <h1>{step}</h1>
          <Question key="{step}" Quiz={questions[step]} nextQuestion={nextQuestion} />
        </>
      ) : (
        <>
          <Navbar />
          <Welcome startQuiz={startQuiz} />
        </>
      )}
    </>
  );
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Navbar />
  //         <Welcome startQuiz={startQuiz} />
  //         {/* <Footer /> */}
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/questions",
  //     element: (
  //       <>
  //         <Navbar />
  //         <Question Quiz={Quiz[++step]} />
  //         {/* <Footer /> */}
  //       </>
  //     ),
  //   },
  //   {
  //     path: "/score",
  //     element: (
  //       <>
  //         <Navbar />
  //         {/* <ScoreCard /> */}
  //         {/* <Footer /> */}
  //       </>
  //     ),
  //   },
  // ]);

  // createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );
}
export default App;
