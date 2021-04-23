import CountUp from 'react-countup';
import { useSelector } from 'react-redux';
import '../css/Card.css';

export default function Card() {
    const covidInfo = useSelector(state => state.covid)
    return (
        <div className="card">
            <div className="card__status card__status--recovered">
                <h3>Recovered</h3>
                <div className="card__today">
                    <span>Today:</span> <strong> +<CountUp separator="," start={0} duration={2} end={covidInfo.today.recovered} /></strong>
                    <p>{covidInfo.date}</p>
                    <br />
                </div>
                <div className="card__total">
                    <span>Total: </span>
                    <strong> <CountUp separator="," start={0} duration={2} end={covidInfo.total.recovered} /></strong>
                </div>
            </div>
            <div className="card__status card__status--confrimed">
                <h3>Confirmed</h3>
                <div className="card__today">
                    <span>Today:</span> <strong> +<CountUp separator="," start={0} duration={2} end={covidInfo.today.confirmed} /></strong>
                    <p>{covidInfo.date}</p>
                    <br />
                </div>
                <div className="card__total">
                    <span>Total: </span> <strong><CountUp separator="," start={0} duration={2} end={covidInfo.total.confirmed} /></strong>
                </div>
            </div>
            <div className="card__status card__status--deaths">
                <h3>Deaths</h3>
                <div className="card__today">
                    <span>Today:</span> <strong> +<CountUp separator="," start={0} duration={2} end={covidInfo.today.deaths} /></strong>
                    <p>{covidInfo.date}</p>
                    <br />
                </div>
                <div className="card__total">
                    <span>Total: </span> <strong><CountUp separator="," start={0} duration={2} end={covidInfo.total.deaths} /></strong>
                </div>
            </div>
        </div >
    )
}