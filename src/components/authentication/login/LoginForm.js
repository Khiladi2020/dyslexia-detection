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

// ----------------------------------------------------------------------

export default function LoginForm() {
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

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack> */}

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          sx={{ my: 2 }}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
