import "./LineChart.css"
import React from 'react'
import { Line } from "react-chartjs-2";

function LineChart( {coinHistory, currentPrice, coinName }) {

    const coinPrice = [];
    const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    console.log(coinTimestamp);
    console.log(coinPrice);
    
    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    const options = {
        scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
        },
    };

    return (
        <div className="lineChart">
            <div className="chart__container">
                <h1 className="chart__heading">
                    {coinName} Price Chart
                </h1>
                <div className="chart__info">
                    <div className="price__change">
                        Price Change {coinHistory?.data?.change}
                    </div>
                    <div className="current__price">
                        Current {coinName} Price : ${currentPrice}
                    </div>
                </div>
                <Line data={data} options={options}/>
            </div>
        </div>
    )
}

export default LineChart
