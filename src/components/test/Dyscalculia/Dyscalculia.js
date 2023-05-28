import React, { useEffect, useRef, useState } from "react";
import styles from "./Dyscalculia.module.css";
import { Button } from "@mui/material";
import { TYPES } from "src/data/TEST_DYSCALCULIA";
import {
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import useSpeechModule from "src/utils/useSpeechModule";

const Dyscalculia = (props) => {
  const [answer, setAnswer] = useState({
    isCurrentCorrect: false,
    currentType: "",
  });
  const [selected, setSelected] = useState(false);
  const [finalResponse, setFinalResponse] = useState({});
  const finalResponseRef = useRef({})
  const answerRef = useRef({})
  
  const questionTypes = TYPES;

  const [speak]= useSpeechModule()

  useEffect(()=>{
      console.log('in here')
      speak(props.details.voice_message)
  },[props.details.voice_message])

  useEffect(() => {}, []);

  const handleAnswerOptionClick = (isCorrect, questionType) => {
    console.log('ravil', isCorrect, questionType)
    setAnswer({
      isCurrentCorrect: isCorrect,
      currentType: questionType,
    });
    answerRef.current = {
      isCurrentCorrect: isCorrect,
      currentType: questionType,
    }
    setSelected(true);
  };

  const handleSubmit = () => {
    if (!selected) {
      alert("Select an option!");
      return;
    }

    // if (!finalResponse[questionTypes[answer.currentType].category]) {
    //   finalResponse[questionTypes[answer.currentType].category] = 0;
    // }

    const category = TYPES[answerRef.current.currentType].category
    console.log('ravilcat',category,props.data)

    if (answer.isCurrentCorrect) {
      const val = finalResponseRef.current
      finalResponseRef.current = ({...val, [category]: val[category] ? val[category] + 1 : 1})

      setFinalResponse(val => ({...val, [category]: val[category] ? val[category] + 1 : 1}));
    }

    //If it's the last question store the report in local storage
    if (props.index === props.totalQuestions - 1) {
      const temp = {}
      for (let category in finalResponseRef.current) {
        for (let type in TYPES) {
          if (TYPES[type].category === category) {
            temp[category] =
              (finalResponseRef.current[category] / TYPES[type].count) * 100;
            break;
          }
        }
      }

      //finalResponse contains the percentage of questions of a particular type that are correct
      props.saveData("Dyscalculia", temp);
    }
    setSelected(false)
    console.log("ravil dyscalculai",props.index, answer, props.data)

    props.onSubmit();
  };

  return (
    <article className={styles.container}>
      <section>
        {props.data.questionText && <h3>{props.data.questionText}</h3>}
        <div className={styles.question_image_container}>
          {props.data.questionImage && (
            <img src={props.data.questionImage} alt="question-image" />
          )}
        </div>
      </section>
      <section className={styles.answer_section}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Choose Option
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(data) => {
              const isCorrect = data.target.value.substr(0,data.target.value.indexOf(':'))
              handleAnswerOptionClick(isCorrect === "true", props.data.questionType)
              // console.log("option", typeof data.target.value);
            }}
          >
            {props.data.answerOptions.map((answerOption, i) => (
              <FormControlLabel
                value={`${answerOption.isCorrect}:${answerOption.answerText}`}
                control={<Radio />}
                label={answerOption.answerText}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </section>
      <div className="next_btn_container">
        <Button
          title="Submit"
          onClick={handleSubmit}
          size="large"
          variant="contained"
          style={{ width: "100%" }}
        >
          Next
        </Button>
      </div>
    </article>
  );
};

export default Dyscalculia;
