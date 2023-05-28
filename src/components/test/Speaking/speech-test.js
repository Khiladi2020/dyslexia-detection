import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import swal from 'sweetalert';
import { areDayPropsEqual } from '@mui/lab/PickersDay/PickersDay';

// ----------------------------------------------------------------------

export default function SpeechTest({props}) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      fetch(process.env.REACT_APP_BACKEND_SERVER_HOST_URL + '/api/v1.0/auth/signin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ ...values, password: window.btoa(values.password) })
      }).then((res) => res.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem('profilePic',data.message.profilePicture);
            localStorage.setItem('firstName',data.message.firstName);
            localStorage.setItem('lastName',data.message.lastName);
            localStorage.setItem('rating', data.message.rating);
            localStorage.setItem('role',data.message.role);
            localStorage.setItem('email',data.message.email);
            localStorage.setItem('id',data.message._id);

            data.message.role === "ADMIN" ? navigate('/admin/app', { replace: true }) : navigate(`/dashboard/user/${window.btoa(data.message.email)}`, { replace: true })
          }
        })
        .catch(err => swal({
              title : 'Something went wrong!',
              text : "Unable to login",
              icon: 'error',
              closeOnClickOutside: false,
              buttons: false,
              className: "pb-3",
              timer: 6000,
          }));

    }
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  //styles
  const RootStyle = styled('div')(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
  }));

  //utility functions
  function loadQuestion() {
    return (props.question)? toString(props.question) : "This is a Sample Question"
  }

  return (
    <RootStyle>
        <Question>
            {loadQuestion}
        </Question>
        <div>

        </div>
        <div>

        </div>
    </RootStyle>
  );
}
