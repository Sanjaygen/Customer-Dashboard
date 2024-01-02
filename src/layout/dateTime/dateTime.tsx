import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Typography } from '@mui/material';

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = format(currentTime, 'yyyy-MM-dd');
  const formattedTime = format(currentTime, 'h:mm:ss a');

  return (
    <div>
      <Typography variant="h5" style={{ fontFamily: 'Arial', color: 'black' }}>
        {formattedDate}
      </Typography>
      <Typography variant="h5" style={{ fontFamily: 'Arial', color: 'black' }}>
        {formattedTime}
      </Typography>
    </div>
  );
};

export default DateTime;
