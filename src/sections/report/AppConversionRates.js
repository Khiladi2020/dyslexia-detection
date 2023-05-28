import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Box, Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../utils/formatNumber';
// components
import { BaseOptionChart } from '../../components/chart';

// ----------------------------------------------------------------------

AppConversionRates.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  chartData: PropTypes.array.isRequired,
};

export default function AppConversionRates({ title, subheader, chartData, ...other }) {
  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = merge(BaseOptionChart(), {
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    dataLabels: {
      style: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
      }
    },
    plotOptions: {
      bar: { horizontal: true, barHeight: '10%', borderRadius: 2 },
    },
    xaxis: {
      categories: chartLabels,
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }} dir="ltr" style={{display:"flex"}}>
        <div style={{width:"30%"}}>
          <ReactApexChart type="bar" series={[{ data: chartSeries }]} options={chartOptions} height={256} />
        </div>
        <div style={{width:"60%"}}>
        <img src="https://fileuploadapp.blob.core.windows.net/tutorial-container/087805eb-20f6-46f2-9a07-94492e879fc9.jpg" height={350} />
        </div>
      </Box>
    </Card>
  );
}
