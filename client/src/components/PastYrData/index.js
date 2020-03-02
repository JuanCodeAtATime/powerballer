import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';



class PastYrData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {}

        };

    }

    componentWillMount() {
        this.getPastYrData();

    }

    getPastYrData() {
        //AJAX calls here
        this.setState({
            chartData: {
                labels:
                    [
                        'Mar 2, 2019', 'Mar 27, 2019', 'Apr 6, 2019', 'May 11, 2019', 'Jun 15, 2019', 'Jul 20, 2019', 'Aug 24, 2019',
                        'Sep 28, 2019', 'Nov 2, 2019', 'Dec 7, 2019',
                        'Jan 11, 2020', 'Feb 15, 2020'
                    ],
                datasets: [

                    {
                        label: 'Jackpot Amount in $ Millions',
                        data: [
                            348, //Mar 2,
                            768, //Mar 27
                            68,  //Apr 6
                            235,  //May 11
                            79,  //Jun 15
                            53,  //Jul 20
                            50, //AUg 24
                            50, //Sep 28 
                            150, //Nov 2
                            130, //Dec 7
                            277, //Jan 11
                            40, //Feb 15
                        ],

                        backgroundColor: [
                            'blue', 'blue', 'blue', 'blue',
                            'blue', 'blue', 'blue', 'blue',
                            'blue', 'blue', 'blue'
                        ]
                    }
                ]
            }
        })
    }



    render() {
        return (

            <div className="chart" style={{ backgroundColor: "white", opacity: ".65", borderRadius: "5px" }}>
                <Line
                    data={this.state.chartData}
                    width={425}
                    height={325}
                    options={{
                        title: {
                            display: true,
                            text: 'Powerball Jackpots for Past Year (2019)',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'top',
                            fontColor: '000'
                        }
                    }}
                />

            </div>

        )
    }
}

export default PastYrData;