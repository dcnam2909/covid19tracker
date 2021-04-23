import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import '../css/Chart.css';


export default function Chart() {
    const [date, setDate] = useState([]);
    const [confirmed, setConfirmed] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const country = useSelector(state => state.covid.country);
    const [data, setData] = useState([]);
    const getInfo30Days = () => {
        axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`)
            .then(res => {
                let data = [];
                let date = [];
                let deaths = [];
                let recovered = [];
                JSON.stringify(res.data.timeline.cases).slice(1, -1).split(",").map(item => {
                    data.push(item.slice(2, -1).split(":")[1]);
                    date.push(item.split(":")[0].slice(1, -2));
                });
                JSON.stringify(res.data.timeline.deaths).slice(1, -1).split(",").map(item => {
                    deaths.push(item.slice(2, -1).split(":")[1]);
                });
                JSON.stringify(res.data.timeline.recovered).slice(1, -1).split(",").map(item => {
                    recovered.push(item.slice(2, -1).split(":")[1]);
                });
                // objectArray.map()
                setConfirmed(data);
                setDate(date);
                setDeaths(deaths);
                setRecovered(recovered);
            })
            .catch(err => console.log(err));
    }


    useEffect(() => {
        getInfo30Days();
    }, [country])
    console.log(data)
    return (
        <div className="chart">
            <LineChart width={1000} height={500} data={data}
                margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" height={40} iconType="square" />
                <Line type="monotone" dataKey="uv" stroke="green" />
                <Line type="monotone" dataKey="amt" stroke="yellow" />
                <Line type="monotone" dataKey="pv" stroke="red" />
            </LineChart>
        </div >
    )
}

const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    }]