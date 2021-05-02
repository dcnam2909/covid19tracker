
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import '../css/Chart.css';



export default function Chart() {
    const { numbDate, date, recovered, confirmed, deaths } = useSelector(state => state.covid.infoByDate);

    const dataChart = {
        labels: date,
        datasets: [
            {
                label: 'Recoverd',
                data: recovered,
                fill: false,
                backgroundColor: 'rgb(0,255, 0)',
                borderColor: 'rgba(0,255, 0)',
            },
            {
                label: 'Confirmed',
                data: confirmed,
                fill: false,
                backgroundColor: 'yellow',
                borderColor: 'yellow',
            },
            {
                label: 'Deaths',
                data: deaths,
                fill: false,
                backgroundColor: 'rgb(255, 0, 0)',
                borderColor: 'rgb(255, 0, 0)',
            },
        ],
    };

    const optionsChart = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                    type: 'line',
                    display: true,
                    position: 'left',
                },
            ],
        },
        plugins: {
            title: {
                display: true,
                text: `COVID-19 ${numbDate} Days Stats`,
                position: 'bottom',
                fullSize: true,
                color: 'black',
                font: {
                    size: 30,

                }
            }
        }
    };

    return (
        <div className="chart" >
            <Line data={dataChart} options={optionsChart} />
        </div >
    )
}

