import React from "react";
import MicRecorder from "mic-recorder-to-mp3"
import { useEffect, useState, useRef } from "react"
import { Oval } from "react-loader-spinner"
import Path from 'path';
import uploadFileToBlob from './../../../utils/azurefileupload/azure-storage-blob.js';
import axios from "axios"
// material
import {
    Card,
    Button,
  } from "@mui/material";
import { styled } from '@mui/material/styles';
import {
  Container,
} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import Lottie from "react-lottie";

import analyzing from '../../../lotties/analyzespeech.json'
import recording from '../../../lotties/recording.json'

import { sizing } from '@mui/system';

// components
import swal from 'sweetalert';
import { Navigate } from "react-router-dom";

const APIKey = process.env.REACT_APP_API_KEY

//lottie config
const defaultOptions = {
  loop: true,
  autoplay: true,
  // here is where we will declare lottie animation
  // "animation" is what we imported before 
  animationData: analyzing,
  rendererSettings: {
     preserveAspectRatio: "xMidYMid slice",
  },
};

const recordingAnimationOptions = {
  loop: true,
  autoplay: true,
  // here is where we will declare lottie animation
  // "animation" is what we imported before 
  animationData: recording,
  rendererSettings: {
     preserveAspectRatio: "xMidYMid slice",
  },
};

// Set AssemblyAI Axios Header
const assemblyAI = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: APIKey,
    "content-type": "application/json",
    "transfer-encoding": "chunked",
  },
})

//styles
const TestContainer = styled('div')(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "70vh",
    padding: "8px",
}));

const QuestionCointainer = styled('div')(({ theme }) => ({
    display: "flex",
    height: "95%",
    padding: "8px",
}));


export default function SpeechTest(props) {
  // Mic-Recorder-To-MP3
  const recorder = useRef(null) //Recorder
  const audioPlayer = useRef(null) //Ref for the HTML Audio Tag
  const [blobURL, setBlobUrl] = useState(null)
  const [audioFile, setAudioFile] = useState(null)
  const [isRecording, setIsRecording] = useState(null)

  // States
  const [uploadURL, setUploadURL] = useState("")
  const [transcriptID, setTranscriptID] = useState("")
  const [transcriptData, setTranscriptData] = useState("")
  const [transcript, setTranscript] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [uploaded, setUploaded] = useState(false)


  // UI/form management
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    //Declares the recorder object and stores it inside of ref
    recorder.current = new MicRecorder({ bitRate: 128 })
  }, [])

  const startRecording = () => {
    // Check if recording isn't blocked by browser
    recorder.current.start().then(() => {
      setIsRecording(true)
    })
  }

  const stopRecording = () => {
    recorder.current
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const file = new File(buffer, "audio.mp3", {
          type: blob.type,
          lastModified: Date.now(),
        })
        const newBlobUrl = URL.createObjectURL(blob)
        setBlobUrl(newBlobUrl)
        setIsRecording(false)
        onFileUpload(file);
        setAudioFile(file)
      })
      .catch((e) => console.log(e))
  }


  // Upload the Audio File and retrieve the Upload URL
  useEffect(() => {
    if (audioFile) {
      assemblyAI
        .post("/upload", audioFile)
          .then((res) => {        console.log(res);
            setUploadURL(res.data.upload_url)})
        .catch((err) => console.error(err))

    }
  }, [audioFile])

  // Submit the Upload URL to AssemblyAI and retrieve the Transcript ID
  const submitTranscriptionHandler = () => {
    assemblyAI
      .post("/transcript", {
        audio_url: uploadURL,
      })
      .then((res) => {
        console.log(res);
        setTranscriptID(res.data.id)

        checkStatusHandler()
      })
      .catch((err) => console.error(err))
  }

  // Check the status of the Transcript
  const checkStatusHandler = async () => {
    setIsLoading(true)
    try {
      await assemblyAI.get(`/transcript/${transcriptID}`).then((res) => {
        console.log(res.data)
        setTranscriptData(res.data)
      })
    } catch (err) {
      console.error(err)
    }
  }

  // Periodically check the status of the Transcript
  useEffect(() => {
    const interval = setInterval(() => {
      if (transcriptData.status !== "completed" && isLoading) {
        checkStatusHandler()
      } else {
        setIsLoading(false)
        setTranscript(transcriptData.text)

        clearInterval(interval)
      }
    }, 1000)
    return () => clearInterval(interval)
  })

  const onFileUpload = async (file) => {
    // prepare UI
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer = await uploadFileToBlob(file);

    setUploading(false);
    setUploaded(true);
  };


  function nextQuestion(){
    setUploading(false);
    setUploaded(false);
    setAudioFile(null);
    props.onSubmit();
  }
    return (
            <TestContainer>
                <QuestionCointainer style={{display:"flex", flexDirection:"column"}}>
                    <center>
                    <h4>{props.data.question}</h4>
                    </center>

                    <div style={{display:"flex", justifyContent:"space-around", margin:"24px"}}>
                      {(!isRecording)
                      ? (<IconButton onClick={startRecording} disabled={isRecording} aria-label="record" size="medium" color="success">
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/play-button-outline-green-icon.png" style={{height:"120px"}}  />
                        </IconButton>)
                      : (<IconButton onClick={stopRecording} disabled={!isRecording} aria-label="pause" size="large" color="primary">
                            <Lottie options={recordingAnimationOptions} height={120} width={120} />
                          </IconButton>)
                      }
                    </div>
                    <center style={{marginTop: "32px",marginBottom: "32px"}}>
                      <audio ref={audioPlayer} src={blobURL} controls='controls' />
                    </center>

                    <center style={{margin: "24px", paddingLeft:"auto", paddingRight:"auto"}}>
                      <Button
                        className='btn btn-secondary'
                        onClick={submitTranscriptionHandler}
                        variant="contained" style={{ paddingLeft:"auto", paddingRight:"auto"}}
                      >
                        Done
                      </Button>
                    </center>

                <center>
                  {isLoading ? (
                    <div>
                      <Lottie options={defaultOptions} height={120} width={120} />

                      <p className='text-center'>Wait we analyzing....</p>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {!isLoading && transcript && (
                    <div className='w-2/3 lg:w-1/3 mockup-code'>
                      <p className='p-6'>{transcript}</p>
                    </div>
                  )}
                </center>

                    

                  
                </QuestionCointainer>
                
                <center>
                  {(uploading) 
                  ? (<div>Saving your answer! Wait a minute!</div>)
                  : (<div></div>)}
                </center>

                <center>
                  {(uploaded) 
                  ? (<div>Your response has been saved.</div>)
                  : (<div></div>)}
                </center>

                <div className="next_btn_container">
                    <Button title="Submit" onClick={nextQuestion} size="large" variant="contained" style={{width: "100%"}}>
                        Next
                    </Button>
                </div>
                
            </TestContainer>
    );
}
