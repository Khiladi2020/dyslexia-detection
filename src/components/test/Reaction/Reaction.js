import { element } from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import useSpeechModule from "src/utils/useSpeechModule";

const SCORE_MAP = {
  2: 5,
  5: 4,
  8: 3.5,
  15: 3.0,
  25: 2,
  30: 1,
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Reaction = (props) => {
  console.log("ravil ", props);
  const [displayQuestion, setDisplayQuestion] = useState(true);
  const score = useRef(0);
  const displayTime = useRef();

  useEffect(() => {
    setTimeout(() => {
      setDisplayQuestion(false);
      displayTime.current = new Date();
    }, props?.data?.questionDisplayTime * 1000);
  }, [props.data]);

  const [speak]= useSpeechModule()

  useEffect(()=>{
      console.log('in here')
      speak(props.details.voice_message)
  },[props.details.voice_message])

  const renderQuestion = () => {
    if (props.data.questionType === "image") {
      return (
        <div>
          <p>{props.data.questionText}</p>
          <img
            src={props.data.questionImage.default}
            style={{ maxHeight: "70vh", width: "auto" }}
          ></img>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "24px" }}>{props.data.questionText}</span>
        </div>
      );
    }
  };

  const calculatePoints = (time) => {
    let sc = 0;
    if (time < 1) sc = 10;
    else if (time < 2) sc = 9;
    else if (time < 3) sc = 8;
    else if (time < 4) sc = 7;
    else if (time < 5) sc = 6;
    else if (time < 6) sc = 5;
    else if (time < 8) sc = 2;
    else if (time < 11) sc = 5;
    else if (time < 14) sc = 3.5;
    else if (time < 18) sc = 3.0;
    else if (time < 25) sc = 2;
    else sc = 1;
    return sc;
  };

  const handleOptionClick = (isCorrect) => {
    const now = new Date();
    const diff = (now.getTime() - displayTime.current.getTime()) / 1000;
    const roundDiff = Math.floor(diff);

    console.log(
      "current time",
      props.index,
      roundDiff,
      calculatePoints(roundDiff)
    );
    setDisplayQuestion(true);
    if (isCorrect) score.current = score.current + calculatePoints(roundDiff);

    if (props.index === props.totalQuestions - 1) {
      props.saveData("questions", {
        score: score.current,
        maxScore: props.totalQuestions * 10,
        remark: "NA"
      });
      // alert(
      //   `Score of user is ${score.current} out of ${props.totalQuestions * 10}`
      // );
    }

    props.onSubmit();
    // console.log(e);
  };

  const renderAnswerOptions = () => {
    return shuffle(props.data.answerOptions).map((option) => {
      return (
        <div
          style={{
            marginBottom: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <label onClick={() => handleOptionClick(option.isCorrect)}>
            <input type="radio" name="question" />
            {option.answerType === "image" ? (
              <img
                src={option.answerData.default}
                style={{ height: "100px", width: "auto", marginLeft: "40px" }}
              ></img>
            ) : (
              <p>{option.answerData}</p>
            )}
          </label>
        </div>
      );
    });
  };

  return (
    <div>
      {displayQuestion && renderQuestion()}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "40px",
          gap: "80px",
        }}
      >
        {!displayQuestion && renderAnswerOptions()}
      </div>
    </div>
  );
};

export default Reaction;
