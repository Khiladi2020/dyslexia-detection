import React, { useEffect, useState } from 'react'
import styles from './TestMaker.module.css'
import { styled } from '@mui/material/styles';
import {
    Card,
    Button,
    Container,
} from "@mui/material";
import { getData, storeData } from '../../utils/storageManager'
import Lottie from 'react-lottie';
import popperAnimation from '../../lotties/popper.json'
import { useNavigate } from 'react-router-dom';

//styles
const Header = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "10vh",
    padding: "8px",
}));

const QuestionTemplateContainer = styled('div')(({ theme }) => ({
    display: "flex",
    height: "30vh",
    padding: "8px",
    paddingLeft: "0px"
}));

const ComponentContainer = styled('div')(({ theme }) => ({
    display: "flex",
    height: "80vh",
    padding: "8px",
}));

const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: popperAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const TestMaker = (props) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [animationCounter, setAnimationCounter] = useState(false)
    const navigate = useNavigate()

    function handleUpdateQuestion(type) {
        if (type == "prev") {
            if (currentQuestion > 0) {
                setCurrentQuestion(prev => prev - 1);
            }
        } else {
            // for next
            if (currentQuestion < props.questions.length - 1) {
                setCurrentQuestion(prev => prev + 1);

                //show animation
                setAnimationCounter(true)
            }
            // move to next test
            else if(currentQuestion === props.questions.length - 1){
                if(props.details.next_test){
                    setCurrentQuestion(0);
                    setAnimationCounter(false);
                    try {
                        navigate(props.details.next_test)
                    } catch(e) {
                        console.log("Error occured in navigation", e)
                    } finally {
                        console.log(props.details.next_test)
                    }
                }
            }
        }
    }

    useEffect(()=>{
        const id = setTimeout(()=>{
            setAnimationCounter(false);
        },2500)

        return () => clearTimeout(id)
    },[currentQuestion])

    const updateTestData = (key, new_data) => {
        if (!props.details.name) {
            alert("Please provide proper test name");
            return;
        }
        const old_data = getData(props.details.name)
        const updated_data = { ...old_data, [key]: { ...old_data[key], ...new_data } };
        storeData(props.details.name, updated_data);

    }

    return (
        <>
            <div style={{position:'absolute',left:0, zIndex:200, width:'100vw'}}>
                {animationCounter && <Lottie options={defaultOptions}
                    height={400}
                    width={390}
                />}
            </div>
            <Container maxWidth="xl">
                <Header >
                    <h3>
                        {props.details.name}
                    </h3>

                    <QuestionTemplateContainer>
                        <span> Question {currentQuestion + 1} of {props.questions.length} </span>
                    </QuestionTemplateContainer>



                </Header>

                <ComponentContainer style={{ display: "flex", flexDirection: "column", }}>
                    {<props.testComponent 
                        data={props.questions[currentQuestion]}
                        details={props.details}
                        onSubmit={handleUpdateQuestion}
                        saveData={updateTestData}
                        index={currentQuestion}
                        totalQuestions={props.questions.length}
                    />}
                </ComponentContainer>


            </Container>
        </>
    )
}

export default TestMaker
