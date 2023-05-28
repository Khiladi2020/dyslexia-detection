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
import recording from '../../lotties/registration.json'

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


export default function RegisterForm() {
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
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.string().required("Age is required"),
    grade: Yup.string().required("Grade is required"),

  });

  const formik = useFormik({
    initialValues: {
      name: "",
      dateOfBirth: "",
      gender: "",
      age: "",
      grade: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      console.log(values);
      var formdata = new FormData();
      formdata.append("name", values.name);
      formdata.append("dateOfBirth", values.dateOfBirth);
      formdata.append("gender", values.gender);
      formdata.append("age", values.gender);
      formdata.append("grade", values.grade);

      localStorage.setItem("testid", testId);
      localStorage.setItem("name", values.name);
      localStorage.setItem("gender", values.gender);
      localStorage.setItem("age", values.age);
      localStorage.setItem("grade", values.grade);



      swal({
        title: "Your Test/Report Id is " + testId,
        icon: "success",
        closeOnClickOutside: false,
        buttons: false,
        className: "pb-5",
        timer: 2000,
      })

      navigate("/test/color-blindness-left", { replace: true });
      // navigate("/test/dyscalculia", { replace: true });


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
              label="Name"
              {...getFieldProps("name")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="Age"
              {...getFieldProps("age")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
            <TextField
              fullWidth
              label="Grade"
              {...getFieldProps("grade")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              {...getFieldProps("gender")}
              label="Gender"
              error={Boolean(touched.gender && errors.gender)}
              helperText={touched.gender && errors.gender}
              select
            >
              <MenuItem value="">Select </MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </TextField>

          </Stack>

          <Button
            fullWidth
            size="large"
            type="submit" 
            variant="contained"
          >
            Start
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
    </div>

  );
}
