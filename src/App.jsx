import { Box } from '@mantine/core';
import SectionFlex from './components/sectionFlex';
import ScrollAnimation from './components/scrollanimation';
import HorizontalScroll from './components/horizontalScroll';

export default function App() {
  return (
    <Box
      sx={{
        width: '100vw',
      }}
    >
      <SectionFlex />
      {/* <ScrollAnimation /> */}
      <HorizontalScroll />
    </Box>
  );
}
