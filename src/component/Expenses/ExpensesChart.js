import React from 'react'
import Chart from '../Chart/Chart'

export default function ExpensesChart(props) {
    const chartDataPoint = [
        {label:'jan' , value:0},
        {label:'feb' , value:0},
        {label:'March' , value:0},
        {label:'April' , value:0},
        {label:'May' , value:0},
        {label:'june' , value:0},
        {label:'July' , value:0},
        {label:'August' , value:0},
        {label:'September' , value:0},
        {label:'Oct' , value:0},
        {label:'Nov' , value:0},
        {label:'Dec' , value:0}

    ]

    for(const expense of props.expenses){
        const expenseMath = expense.date.getMonth();
        chartDataPoint[expenseMath].value += expense.amount;
    }

    return (
        <div>
            <Chart dataPoint={chartDataPoint}/>
        </div>
    )
}
