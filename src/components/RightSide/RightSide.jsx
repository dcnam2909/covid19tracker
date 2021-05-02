import '../css/RightSide.css';
import SortOptions from './SortOptions';
import Country from './Country';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { changeListCountry } from '../../covidSlice';

export default function RightSide() {
    const listCountry = useSelector(state => state.covid.listCountry);
    const changeList = useDispatch();
    const getListCountry = (options) => {
        axios.get(`https://disease.sh/v3/covid-19/countries?sort=${options}`)
            .then(res => {
                const list = res.data.map((item) => {
                    return {
                        country: item.country,
                        flag: item.countryInfo.flag,
                        confirmed: item.cases,
                        recovered: item.recovered,
                        deaths: item.deaths,
                    }
                })
                changeList(changeListCountry({
                    country: list,
                }))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getListCountry(listCountry.options);
    }, [listCountry.options]);

    return (
        <div className="right-side">
            <SortOptions />
            <div className="list__country">
                {listCountry.country[0]?.map((info, index) =>
                    <Country item={info} key={index} />
                )}
            </div>
        </div>
    )
}

