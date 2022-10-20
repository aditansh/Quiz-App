import React, { useState, useRef } from "react";

function Question(props) {
  const answer = useRef(null);
  const Options = props.Quiz.options;

  const isText = props.Quiz.type === "text";
  const isSingle = props.Quiz.type === "single";
  const isMultiple = props.Quiz.type === "multiple";
  const [selectedAns, setSelectedAns] = useState("");

  var checked = new Array();

  function setQuestion() {
    return { __html: props.Quiz.question };
  }

  const handleChange = (e) => {
    if (isSingle) {
      setSelectedAns(e.target.value);
    }
    if (isMultiple) {
      if (e.target.checked) {
        checked.push(e.target.value);
      } else if (!e.target.checked) {
        checked.pop(e.target.value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isText) {
      const ans = answer.current.value;
      props.nextQuestion(ans === props.Quiz.answer);
      e.target.reset();
    } else if (isSingle) {
      props.nextQuestion(selectedAns === props.Quiz.answer);
      e.target.reset();
    } else if (isMultiple) {
      checked.sort();
      const ans = props.Quiz.answer;
      function eql(arr1, arr2) {
        if (arr1.length !== arr2.length) {
          return false;
        }
        let res = true;
        arr1.forEach((element, index) => {
          if (element !== arr2[index]) {
            res = false;
          }
        });
        return res;
      }
      props.nextQuestion(eql(ans, checked));
      e.target.reset();
    }
  };

  // const [checkedState, setCheckedState] = useState(
  //   new Array(4).fill(false)
  // );

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // };

  return (
    <>
      <div className="mt-28 w-4/5 mx-auto my-5 text-white">
        <div className="px-20 py-15 border border-solid shadow-gray-900 shadow-sm rounded">
          <p
            className="text-xl font-bold my-7"
            dangerouslySetInnerHTML={setQuestion()}
          ></p>
          {isText ? (
            <form onSubmit={handleSubmit}>
              <input
                ref={answer}
                className="my-5 w-full text-black"
                placeholder="Enter one word answer only"
                type="text"
                name="opt"
                autoComplete="off"
                required
              />
              <br />
              <input
                className="border border-gray-900 rounded cursor-pointer px-3 py-2 my-5 bg-slate-600 hover:bg-cyan-700 hover:text-white"
                type="submit"
                value="SUBMIT"
              />
            </form>
          ) : null}
          {isSingle ? (
            <form onSubmit={handleSubmit}>
              {Options.map((option) => {
                return (
                  <label className="block m-2">
                    <input
                      ref={answer}
                      className="mr-2"
                      type="radio"
                      name="opt"
                      onChange={handleChange}
                      value={option}
                      required
                    />
                    {option}
                  </label>
                );
              })}
              <input
                className="border border-gray-900 rounded cursor-pointer px-3 py-2 my-5 bg-slate-600 hover:bg-cyan-700 hover:text-white"
                type="submit"
                value="SUBMIT"
              />
            </form>
          ) : null}
          {isMultiple ? (
            <form onSubmit={handleSubmit}>
              {Options.map((option) => {
                return (
                  <label className="block m-2">
                    <input
                      ref={answer}
                      className="mr-2"
                      type="checkbox"
                      name="opt"
                      value={option}
                      key={option}
                      // checked={checkedState[index]}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                );
              })}
              <input
                className="border border-gray-900 rounded cursor-pointer px-3 py-2 my-5 bg-slate-600 hover:bg-cyan-700 hover:text-white"
                type="submit"
                value="SUBMIT"
              />
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Question;
