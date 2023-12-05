import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useMediaQuery from '@mui/material/useMediaQuery';

const BarChartGraph = ({ data, type }) => {
    const isSmallScreen = useMediaQuery('(max-width: 450px)');
    const isTabScreen = useMediaQuery('(max-width: 750px)');
    const reducedData = isSmallScreen ? data.filter((entry, index) => index % 3 === 0)
        // : isTabScreen ? data.filter((entry, index) => index % 2 === 0)
            : data;

    const chartData = isSmallScreen ? reducedData : data;

    return (
        <ResponsiveContainer width="95%" height={isSmallScreen ? 200 : 300}>
            <BarChart data={chartData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey={type} fill="#9DCAFF" barSize={8} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default BarChartGraph;
