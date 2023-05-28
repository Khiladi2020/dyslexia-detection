import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// @mui
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../utils/formatNumber';
// components
import { BaseOptionChart } from '../../components/chart';

// ----------------------------------------------------------------------

SpeakingReport.propTypes = {
  title: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

function getErrorStatusColor(percentage) {
  if(percentage>70) return '#ff0000';
  if(percentage>50) return '#ff0000';
  if(percentage>30) return '#00FF00';
  if(percentage>20) return '#00FF00';
  if(percentage>10) return '#00FF00';
}

export default function SpeakingReport({ title, chartData, ...other }) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const percentage = 66;

  

  const circularStyles = buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    pathTransitionDuration: 0.5,
    // Colors
    pathColor: getErrorStatusColor(percentage),
    textColor: getErrorStatusColor(percentage),
    trailColor: '#d6d6d6',
  })

  return (
    <Card {...other}>
      <CardHeader title={title} />

      <Box sx={{ mx: 3 }} dir="ltr">

        <div style={{ display: "flex", justifyContent:"space-around", height: 120 }}>
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              Phoneom Test
            </div>
            <div style={{ display: "flex",}}>
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                Incorrect : 3
              </div>
              &nbsp;&nbsp;
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                Total : 5
              </div>
            </div>
          </div>
          <div style={{ width: 100, height: 100, marginTop: "auto", marginBottom: "auto"  }}>
            <CircularProgressbar styles={circularStyles} value={percentage} text={`${percentage}%`} />   
          </div>
        </div>
          
        <div style={{ display: "flex", justifyContent:"space-around", height: 120 }}>
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              Phoneom Test
            </div>
            <div style={{ display: "flex",}}>
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                Incorrect : 3
              </div>
              &nbsp;&nbsp;
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                Total : 5
              </div>
            </div>
          </div>
          <div style={{ width: 100, height: 100, marginTop: "auto", marginBottom: "auto"  }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />   
          </div>
        </div>


        <div style={{ display: "flex", justifyContent:"space-around", height: 120 }}>
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <div style={{ marginTop: "auto", marginBottom: "auto" }}>
              Phoneom Test
            </div>
            <div style={{ display: "flex",}}>
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                Incorrect : 3
              </div>
              &nbsp;&nbsp;
              <div style={{ marginTop: "auto", marginBottom: "auto" }}>
                Total : 5
              </div>
            </div>
          </div>
          <div style={{ width: 100, height: 100, marginTop: "auto", marginBottom: "auto"  }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />   
          </div>
        </div>

      </Box>
    </Card>
  );
}
