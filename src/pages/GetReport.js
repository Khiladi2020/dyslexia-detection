import * as Yup from "yup";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Lottie from "react-lottie";

import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { useNavigate, Navigate } from "react-router-dom";

// material
import {
  Stack,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import recording from '../lotties/registration.json'

// ----------------------------------------------------------------------
import swal from "sweetalert";
function generateRandomNumber() {
  var minm = 100000;
  var maxm = 999999;
  return Math.floor(Math
  .random() * (maxm - minm + 1)) + minm;
}


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

const testId = generateRandomNumber();


export default function GetReport() {
  const navigate = useNavigate();


  useEffect(() => {
    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   process.env.REACT_APP_BACKEND_SERVER_HOST_URL +
    //     "/api/v1.0/users/getStateList",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => setStates(result.data))
    //   .catch((error) => console.log("error", error));
  }, []);

  const RegisterSchema = Yup.object().shape({
    reportID: Yup.string().required()
  });

  const formik = useFormik({
    initialValues: {
      reportID: ""
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      console.log(values);
      navigate(`/report?testId=${values.reportID}`, { replace: true });


      // swal({
      //   title: "Your Test Id is " + testId,
      //   icon: "success",
      //   closeOnClickOutside: false,
      //   buttons: false,
      //   className: "pb-5",
      //   timer: 5000,
      // })


      // fetch(
      //   process.env.REACT_APP_BACKEND_SERVER_HOST_URL +
      //     "/api/v1.0/auth/signup",
      //   {
      //     method: "POST",
      //     body: formdata,
      //   }
      // ).then((data) => {
      //   swal({
      //     title: "Your Test Id is " + testId,
      //     icon: "success",
      //     closeOnClickOutside: false,
      //     buttons: false,
      //     className: "pb-5",
      //     timer: 3000,
      //   }).then(() => {
      //     navigate("/test/writing", { replace: true });
      //   });
      // });
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  return (
    <div style={{margin:"10%"}}>
    <Lottie options={recordingAnimationOptions} height={200} width={200} />
    <br>
    </br>
    <br>
    </br>

    <FormikProvider value={formik}  >
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="reportID"
              placeholder="Enter report ID"
              {...getFieldProps("reportID")}
            />
          </Stack>
          <Button
            fullWidth
            size="large"
            type="submit" 
            variant="contained"
          >
            Get Report
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
    </div>

  );
}
