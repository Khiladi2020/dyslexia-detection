import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterForm } from '../components/authentication/register';
// import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundColor: 'white',
    marginTop: '5%',
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  marginTop: 'auto',
  marginBottom: 'auto'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  overflowY: 'scroll',
  maxHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: theme.spacing(6, 0, 8, 6)
}));

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <RootStyle title="Register | MithranBuddy" sx={{height:'100%'}}>
      <AuthLayout>
        Already have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </AuthLayout>

      <Container sx={{display: "flex", flexDirection: 'row', height: '90vh'}}>
          <MHidden width="mdDown">
            <SectionStyle>
              <Typography variant="h3" sx={{ px: 5, mt: 5, mb: 5 }}>
                Enter the user details
              </Typography>
              <img alt="register" src="/static/illustrations/illustration_register.png" />
            </SectionStyle>
          </MHidden>

          <Container >
            <ContentStyle>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" gutterBottom>
                  Register
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                  Fill all the fields correctly.
                </Typography>
              </Box>

              {/* <AuthSocial /> */}

              <RegisterForm />

              <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                By registering, I agree to MithranBuddy&nbsp;
                <Link underline="always" sx={{ color: 'text.primary' }}>
                  Terms of Service
                </Link>
                &nbsp;and&nbsp;
                <Link underline="always" sx={{ color: 'text.primary' }}>
                  Privacy Policy
                </Link>
                .
              </Typography>

              <MHidden width="smUp">
                <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
                  Already have an account?&nbsp;
                  <Link to="/login" component={RouterLink}>
                    Login
                  </Link>
                </Typography>
              </MHidden>
            </ContentStyle>
          </Container>
      </Container>
    </RootStyle>
  );
}
