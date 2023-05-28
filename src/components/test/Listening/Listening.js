import React, {useEffect, useState, useRef} from 'react'
import {
    Button,
    TextField,
  } from "@mui/material";
import { styled } from '@mui/material/styles';
import speakerIcon from '../../../assets/icon_audio.png'
import styles from './Listening.module.css'
import robotAnimation from '../../../lotties/talking-robot.json'
import Lottie from 'react-lottie';

const synth = window.speechSynthesis;

const getIndianVoices = () => {
    return synth.getVoices().filter(data => data.lang.includes("IN"))
}

const handlePlayAudio = (message, speed = 0.7) => {
    const utterThis = new SpeechSynthesisUtterance(message);
    utterThis.rate = speed;
    utterThis.voice = getIndianVoices().filter(val => val.name === "Rishi")[0]
    synth.speak(utterThis)
}

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: robotAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Listening = (props) => {
    const inputRef = useRef(null);
    const [isBotStopped, setIsBotStopped] = useState(false);

    const handleAnswerCheck = () => {
        const inputText = inputRef.current.value?.toLowerCase()
        const targetText = props.data.answer.toLowerCase()
        console.log(inputText, targetText)
        return inputText === targetText
    }

    const handleSubmit = ()=>{
        props.saveData("questions", {
            [props.index]: {
                ...props.data,
                userResponse: inputRef.current.value?.toLowerCase(),
                isUserResponseValid: handleAnswerCheck()
            }
        })

        //clear text field
        console.log(inputRef.current.value)
        inputRef.current.value = ""

        props.onSubmit()
    }
    // console.log(synth.getVoices(),getIndianVoices())

    //fixed multiple rerendering issues
    useEffect(()=>{
        const id = setTimeout(()=>{
            if(props.data?.speed) handlePlayAudio(props.data.title, props.data.speed);
            else handlePlayAudio(props.data.title);
        },300);

        const id2 = setInterval(()=>{
            if(!synth.speaking){
                setTimeout(()=>{
                    console.log('instruction started playing')
                    handlePlayAudio(props.data.instruction);
                },900)
                clearInterval(id2)
            }
        },301)

        //check for bot animation playing
        const id3 = setInterval(()=>{
            if(synth.speaking) setIsBotStopped(false)
            else if(!synth.speaking) setIsBotStopped(true);
            console.log('bot status', synth.speaking)
        },100)

        return () => {
            clearTimeout(id);
            clearInterval(id2);
            clearInterval(id3);
            synth.cancel();
        }
    },[props.data])

    const playAudioAgain = ()=>{
        if(props.data?.speed) handlePlayAudio(props.data.title, props.data.speed);
        else handlePlayAudio(props.data.title);
    }

    return (
        <article className={styles.container}>
            <section>
                {/* <Button onClick={playAudioAgain}>
                    <img className={styles.speaker_icon} src={speakerIcon} alt="speaker icon"/>
                </Button> */}
                <Button onClick={playAudioAgain}>
                    <Lottie options={defaultOptions}
                        height={400}
                        width={320}
                        isStopped={isBotStopped}
                    />
                </Button>
            </section>
            <section className={styles.answer_section}>
                <h3>Answer:</h3>
                <TextField type="text" inputRef={inputRef}/>
            </section>
            <section className={styles.next_btn_container}>
                <Button 
                    title="Submit" 
                    onClick={()=>{
                        alert(`Answer is : ${handleAnswerCheck()}`)
                    }} 
                    variant="contained"
                    size='large'
                    sx={{mb:1}}
                >
                    Check Answer
                </Button>
                <Button title="Submit" onClick={handleSubmit} variant="contained" size='large'>
                    Next
                </Button>
            </section>
        </article>
    )
}

export default Listening
export {handlePlayAudio}