import * as Yup from "yup";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { useFormik, Form, FormikProvider } from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { useNavigate } from "react-router-dom";
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

// ----------------------------------------------------------------------
import swal from "sweetalert";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [states, setStates] = useState([]);
  const [qualificationFile, setQualificationFile] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      process.env.REACT_APP_BACKEND_SERVER_HOST_URL +
        "/api/v1.0/users/getStateList",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setStates(result.data))
      .catch((error) => console.log("error", error));
  }, []);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password is required"),
    dateOfBirth: Yup.date().required("Date of Birth required"),
    mobileNo: Yup.string()
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
      .required("Mobile number is required"),
    gender: Yup.string().required("Gender is required"),
    qualification: Yup.string().required("Qualification is required"),
    maritalStatus: Yup.string().required("Marital Status is required"),
    state: Yup.string().required("State is required"),
    region: Yup.string().required("Region is required"),
    branch: Yup.string().required("Branch is required"),
    zipcode: Yup.string()
      .matches(/^[0-9]{6}$/, "Zipcode is not valid")
      .required("Zipcode is required"),
    addressLine1: Yup.string().required("Address 1 is required"),
    addressLine2: Yup.string().required("Address 2 is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      mobileNo: "",
      gender: "",
      qualification: "",
      maritalStatus: "",
      state: "",
      region: "",
      branch: "",
      zipcode: "",
      addressLine1: "",
      addressLine2: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      console.log(values);
      var formdata = new FormData();
      // formdata.append("profilePicture", profilePic);
      formdata.append("firstName", values.firstName);
      formdata.append("lastName", values.lastName);
      formdata.append("email", values.email);
      formdata.append("dateOfBirth", values.dateOfBirth);
      formdata.append("mobileNo", values.mobileNo);
      formdata.append("gender", values.gender);
      formdata.append("maritalStatus", values.maritalStatus);
      formdata.append("addressLine1", values.addressLine1);
      formdata.append("addressLine2", values.addressLine2);
      formdata.append("state", values.state);
      formdata.append("region", values.region);
      formdata.append("branch", values.branch);
      formdata.append("zipcode", values.zipcode);
      formdata.append("qualification", values.qualification);
      qualificationFile &&
        formdata.append("qualificationFile", qualificationFile);
      formdata.append("password", window.btoa(values.password));
      formdata.append("confirmPassword", window.btoa(values.confirmPassword));
      if (qualificationFile) {
        fetch(
          process.env.REACT_APP_BACKEND_SERVER_HOST_URL +
            "/api/v1.0/auth/signup",
          {
            method: "POST",
            body: formdata,
            redirect: "follow",
          }
        ).then((data) => {
          swal({
            title: "Registered Successfully.",
            icon: "success",
            closeOnClickOutside: false,
            buttons: false,
            className: "pb-5",
            timer: 3000,
          }).then(() => {
            navigate("/", { replace: true });
          });
        });
      } else {
        swal({
          title: "Please upload qualification proof.",
          icon: "info",
          closeOnClickOutside: false,
          buttons: false,
          className: "pb-5",
          timer: 3000,
        });
      }
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps("email")}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              type="date"
              label="Date of Birth"
              InputLabelProps={{ shrink: true }}
              {...getFieldProps("dateOfBirth")}
              error={Boolean(touched.dateOfBirth && errors.dateOfBirth)}
              helperText={touched.dateOfBirth && errors.dateOfBirth}
            />
            <TextField
              fullWidth
              type="number"
              label="Phone"
              {...getFieldProps("mobileNo")}
              error={Boolean(touched.mobileNo && errors.mobileNo)}
              helperText={touched.mobileNo && errors.mobileNo}
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
            <TextField
              fullWidth
              {...getFieldProps("qualification")}
              label="Qualification"
              error={Boolean(touched.qualification && errors.qualification)}
              helperText={touched.qualification && errors.qualification}
              select
            >
              <MenuItem value="">Select </MenuItem>
              <MenuItem value={"Metric"}>Metric</MenuItem>
              <MenuItem value={"Pre-University"}>Pre-University</MenuItem>
              <MenuItem value={"Graduate"}>Graduate</MenuItem>
              <MenuItem value={"Post-Graduate"}>Post-Graduate</MenuItem>
              <MenuItem value={"Others"}>Others</MenuItem>
            </TextField>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              {...getFieldProps("maritalStatus")}
              label="Marital Status"
              error={Boolean(touched.maritalStatus && errors.maritalStatus)}
              helperText={touched.maritalStatus && errors.maritalStatus}
              select
            >
              <MenuItem value="">Select </MenuItem>
              <MenuItem value={"Married"}>Married</MenuItem>
              <MenuItem value={"Unmarried"}>Unmarried</MenuItem>
            </TextField>
            <TextField
              fullWidth
              {...getFieldProps("state")}
              label="State"
              error={Boolean(touched.state && errors.state)}
              helperText={touched.state && errors.state}
              select
            >
              <MenuItem value="">Select </MenuItem>
              {states.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              fullWidth
              label="Region"
              {...getFieldProps("region")}
              error={Boolean(touched.region && errors.region)}
              helperText={touched.region && errors.region}
            />

            <TextField
              fullWidth
              label="Branch"
              {...getFieldProps("branch")}
              error={Boolean(touched.branch && errors.branch)}
              helperText={touched.branch && errors.branch}
            />
          </Stack>
          <TextField
            fullWidth
            type="number"
            label="Zipcode"
            {...getFieldProps("zipcode")}
            error={Boolean(touched.zipcode && errors.zipcode)}
            helperText={touched.zipcode && errors.zipcode}
          />
          <TextField
            fullWidth
            label="Address 1"
            {...getFieldProps("addressLine1")}
            error={Boolean(touched.addressLine1 && errors.addressLine1)}
            helperText={touched.addressLine1 && errors.addressLine1}
            multiline={true}
            rows={3}
          />
          <TextField
            fullWidth
            label="Address 2"
            {...getFieldProps("addressLine2")}
            error={Boolean(touched.addressLine2 && errors.addressLine2)}
            helperText={touched.addressLine2 && errors.addressLine2}
            multiline={true}
            rows={3}
          />
          <TextField
            fullWidth
            type="file"
            label="Markscard"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setQualificationFile(e.target.files[0])}
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm-Password"
            {...getFieldProps("confirmPassword")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    <Icon icon={showConfirmPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
