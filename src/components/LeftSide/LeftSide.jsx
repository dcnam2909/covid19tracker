import '../css/LeftSide.css'
import Card from './Card';
import Header from './Header';
import Chart from './Chart';

export default function LeftSide() {
    return (
        <div className="left-side">
            <Header />
            <Card />
            <Chart />
        </div>

    )
}