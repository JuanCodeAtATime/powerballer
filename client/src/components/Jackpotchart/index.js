import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
// import Moment from 'react-moment'
import API from "../../utils/API";



class Jackpotchart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            drawDates: {},
            jackpotAmt: {}

        };

    }






    componentWillMount() {
        this.getChartData();
        // this.loadPowerballData();

    }

    getChartData() {
        API.loadChartData()
            .then(res => {
                console.log('RESPONSE', res)
                this.setState({
                    chartData: {
                        labels:
                            [
                                '1/1/2020',
                                res.data[3].prizes.asOfDate,
                                res.data[2].prizes.asOfDate,
                                res.data[1].prizes.asOfDate,
                                res.data[0].prizes.asOfDate

                            ],
                        datasets: [
                            {
                                label: '',
                                data:
                                    [
                                        1000000,
                                        res.data[3].prizes.values[0].value,
                                        res.data[2].prizes.values[0].value,
                                        res.data[1].prizes.values[0].value,
                                        res.data[0].prizes.values[0].value

                                    ],
                                //Not rendering this data because value types are mixed
                                backgroundColor: [
                                    'green', 'green', 'green', 'green', 'red'
                                ]
                            }
                        ]
                    }
                })
            }
            )
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="chart" style={{ backgroundColor: "white", opacity: ".65", borderRadius: "5px" }}>
                            <Bar
                                data={this.state.chartData}
                                width={425}
                                height={325}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Jackpot Tracking (Now)',
                                        fontSize: 20
                                    },
                                    legend: {
                                        display: true,
                                        position: 'top',
                                        fontColor: 'black'
                                    }
                                }}
                            />
                        </div>


                    </div>

                </div>
            </div>

        )
    }
}

export default Jackpotchart;