import React from 'react';
import Container from './components/Container/Container';
import ColorPicker from './components/ColorPicker';
import Alert from './components/Alert';
import Box from './components/Box/Box';
import colors from './json/colorPickerOptions.json';

export default function App() {
  return (
    <Container>
      <ColorPicker colors={colors} />
      <Box type="small" />
      <Box type="medium" />
      <Box type="large" />
      <Alert text="Alert" type="success" />
      <Alert text="Alert" type="warning" />
      <Alert text="Alert" type="error" />
    </Container>
  );
}
