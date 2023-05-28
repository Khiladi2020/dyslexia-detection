import PropTypes from 'prop-types';
// material
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  // return <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} />;
  return <Box component="img" src="/static/sihlogo.png" sx={{ width: 60, height: 60, ...sx }} />;

}
