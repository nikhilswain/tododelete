import { Box } from '@mantine/core';
import SectionFlex from './components/sectionFlex';
import ScrollAnimation from './components/scrollanimation';

export default function App() {
  return (
    <Box
      sx={{
        width: '100vw',
      }}
    >
      <SectionFlex />
      {/* <ScrollAnimation /> */}
    </Box>
  );
}
