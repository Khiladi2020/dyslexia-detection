import React, {useCallback, useState, useRef, useEffect} from 'react'
import {
    Button,
  } from "@mui/material";
import { styled } from '@mui/material/styles';
import Lottie from "react-lottie";
import styles from './Uploadfiles.module.css'


import Path from 'path'
import uploadFileToBlob, {isStorageConfigured} from './azure-file-storage';
import recording from '../../../lotties/registration.json'

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

const storageConfigured = isStorageConfigured();

const UploadFiles = (props) => {
  // all blobs in container
  const [blobList, setBlobList] = useState([]);

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));

  const onFileChange = (event) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };

  const onFileUpload = async () => {
    // prepare UI
    setUploading(true);

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer = await uploadFileToBlob(fileSelected);

    // prepare UI for results
    setBlobList(blobsInContainer);

    // reset state/form
    setFileSelected(null);
    setUploading(false);
    setInputKey(Math.random().toString(36));
  };

  // display form
  const DisplayForm = () => (
    <div>
      <input type="file" onChange={onFileChange} key={inputKey || ''} />
      <button type="submit" onClick={onFileUpload}>
        Upload!
          </button>
    </div>
  )

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>
      <ul>
        {blobList.map((item) => {
          return (
            <li key={item}>
              <div>
                {Path.basename(item)}
                <br />
                <img src={item} alt={item} height="200" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <article className={styles.container}>
        <section>
            <h3>{props.data.question}</h3>
        </section>

        <section className={styles.answer_section}>
            <center style={{margin: "24px", paddingLeft:"auto", paddingRight:"auto"}}>
                {/* <Button
                    className='btn btn-secondary'
                    onClick={capture}
                    variant="contained" style={{ paddingLeft:"auto", paddingRight:"auto"}}
                >
                    Capture
                </Button> */}
                
                <center>
                  <Lottie options={recordingAnimationOptions} height={200} width={200} />
                </center>

                <br />

                <input className="btn btn-secondary" variant="contained" style={{ paddingLeft:"auto", paddingRight:"auto"}} type="file" onChange={onFileChange} key={inputKey || ''} />

                <Button
                    className='btn btn-secondary'
                    onClick={onFileUpload}
                    variant="contained" style={{ paddingLeft:"auto", paddingRight:"auto"}}
                >
                    Upload
                </Button>
            </center>
        </section>
        <section className="next_btn_container">
            <Button title="Submit" onClick={props.onSubmit} variant="contained" size='large'>
                Next
            </Button>
        </section>
    </article>
  );
};

export default UploadFiles;