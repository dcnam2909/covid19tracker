import "../css/Country.css";

export default function Country({ item }) {
    return (
        <div className="country">
            <div className="country__info">
                <img className="country__info--logo" src={item.flag} alt='logo' />
                <div className="country__info--name"><strong>{item.country}</strong></div>
            </div>
            <div className="country__status">
                <div><span className="country__status--confirmed">Confirmed:</span><strong> {item.confirmed}</strong></div>
                <div><span className="country__status--recovered">Recovered:</span><strong> {item.recovered}</strong></div>
                <div><span className="country__status--deaths">Deaths:</span><strong> {item.deaths}</strong></div>
            </div>
        </div>
    )
}