import React from 'react';
import Container from './components/Container/Container';
// import ColorPicker from './components/ColorPicker';
// import Alert from './components/Alert';
// import Box from './components/Box/Box';
import Counter from './components/Counter';
// import colors from './json/colorPickerOptions.json';

export default function App() {
  return (
    <Container>
      <Counter initialValue={10} />
      {/* <ColorPicker colors={colors} /> */}
      {/* <Box type="small" /> */}
      {/* <Alert text="Alert" type="success" /> */}
    </Container>
  );
}
