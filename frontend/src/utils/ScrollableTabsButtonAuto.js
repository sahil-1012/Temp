import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function ScrollableTabsButtonAuto({ tabs }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box  sx={{ maxWidth: '100%', bgcolor: 'background.paper', margin: 'auto' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                sx={{ width: '100%' }} // Set width to 100%
                
            >
                {tabs.map((tab, index) => (
                    <Tab label={tab} key={index} disableRipple/>
                ))}
            </Tabs>
        </Box>
    );
}
