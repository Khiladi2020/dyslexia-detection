// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
//css

import StoryMaker from './components/testmaker/StoryMaker'
import TEST_STORY from './data/TEST_STORY';
import './index.css';
import { useState } from 'react';


// ----------------------------------------------------------------------

export default function App() {
  const [email,setEmail]=useState('');
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router email={email} setEmail={setEmail}/>
    </ThemeConfig>
    // <StoryMaker data={TEST_STORY.stories[0].pictures} details={TEST_STORY.stories[0].details} questions={TEST_STORY.stories[0].questions}/>
  );
}

// ps1