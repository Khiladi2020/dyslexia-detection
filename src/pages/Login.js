import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';
// import AuthSocial from '../components/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundColor: 'white',
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  height: '70vh',
  maxHeight: '560px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  marginTop: 'auto',
  marginBottom: 'auto'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | Minimal-UI" sx={{maxWidth:'100% !important', overflow:"hidden"}}>
      <AuthLayout mt={10} sx={{mt: 2}}>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </AuthLayout>

      <Container sx={{display:'flex', flexDirection:'row', justifyContent: 'space-around'}}>
        <MHidden width="mdDown"  style={{marginTop: '10px'}}>
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 5, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <Container sx={{ width: "80% !important"}} >
              <img src="/static/illustrations/illustration_login.png" alt="login" />
            </Container>
          </SectionStyle>
        </MHidden>

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack sx={{ mb: 5 }}>
              <Typography variant="h4" gutterBottom>
                Sign in to MithranBuddy
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Enter your details below</Typography>
            </Stack>
            {/* <AuthSocial /> */}

            <LoginForm />

            <MHidden width="smUp">
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Don’t have an account?&nbsp;
                <Link variant="subtitle2" component={RouterLink} to="register">
                  Get started
                </Link>
              </Typography>
            </MHidden>
          </ContentStyle>
        </Container>
      </Container>
      
    </RootStyle>
  );
}
