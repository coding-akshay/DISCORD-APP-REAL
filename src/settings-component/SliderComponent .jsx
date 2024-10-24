import React, { useState } from 'react';
import { Slider, Box, Typography } from '@mui/material';

const marks = [
  { value: 12, label: '12px' },
  { value: 14, label: '14px' },
  { value: 15, label: '15px' },
  { value: 16, label: '16px' },
  { value: 18, label: '18px' },
  { value: 20, label: '20px' },
  { value: 24, label: '24px' }
];

function SliderComponent() {
  const [value, setValue] = useState(16);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography gutterBottom>Font Size</Typography>
      <Slider
        value={value}
        onChange={handleSliderChange}
        step={null}
        marks={marks}
        min={12}
        max={24}
        valueLabelDisplay="on"
        sx={{
          '& .MuiSlider-markLabel': {
            color: '#8a8a8a',
          },
          '& .MuiSlider-markLabel[data-index="3"]': {
            color: 'green',
          },
          '& .MuiSlider-valueLabel': {
            color: 'green',
          },
        }}
      />
    </Box>
  );
}

export default SliderComponent;
