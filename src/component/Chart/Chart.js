import React from 'react';

import ChatBar from './ChartBar'
import './Chart.css'

const Chart = props =>{
    const dataPointValues = props.dataPoint.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            <ChatBar/>
            {props.dataPoint.map((dataPoint) => 
                 
                 (<ChatBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                    />
            ))}
        </div>
    );

};

export default Chart;