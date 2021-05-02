import { FormControl, MenuItem, Select } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import '../css/Header.css';
import { changeInfo, getInfoByDate } from '../../covidSlice'

export default function Header() {
    const dispatch = useDispatch();
    const [countryISO, setCountryISO] = useState('Global');
    const [countryName, setCountryName] = useState('');
    const [allCountryInfos, setAllCountryInfos] = useState([]);

    const getTodayInfo = () => {
        axios.get('https://disease.sh/v3/covid-19/all')
            .then(res => {
                dispatch(changeInfo({
                    today: {
                        confirmed: res.data.todayCases,
                        recovered: res.data.todayRecovered,
                        deaths: res.data.todayDeaths,
                    },
                    total: {
                        confirmed: res.data.cases,
                        recovered: res.data.recovered,
                        deaths: res.data.deaths,
                    },
                    country: 'all',
                }));
            })
    }

    const getAllCountryInfos = () => {
        axios.get('https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=true&allowNull=0')
            .then(res => {
                let dataInfo = [];
                res.data.forEach(item => {
                    dataInfo.push({
                        countryName: item.country,
                        countryInfo: item.countryInfo,
                        cases: item.cases,
                        todayCases: item.todayCases,
                        deaths: item.deaths,
                        todayDeaths: item.todayDeaths,
                        recovered: item.recovered,
                        todayRecovered: item.todayRecovered,
                    });
                });
                setAllCountryInfos(dataInfo);
            })
            .catch(err => console.log(err));
    }
    const changeInfoDispatch = (country) => {
        dispatch(changeInfo({
            today: {
                confirmed: country.todayCases,
                recovered: country.todayRecovered,
                deaths: country.todayDeaths,
            },
            total: {
                confirmed: country.cases,
                recovered: country.recovered,
                deaths: country.deaths,
            },
            country: countryISO,
        }));
    }
    const changeOption = (e) => {
        setCountryISO(e.target.value);
        setCountryName((allCountryInfos.find(info => e.target.value === info.countryInfo.iso2)));
    }

    const getInfoChart = (numbDate) => {
        let iso = countryISO;
        if (countryISO === 'Global') iso = 'all';
        axios.get(`https://disease.sh/v3/covid-19/historical/${iso}?lastdays=${numbDate}`)
            .then(res => {
                let data = res.data.timeline;
                if (iso === 'all') data = res.data;
                let date = [];
                let confirmed = [];
                let recovered = [];
                let deaths = [];
                for (let i of Object.keys(data.cases)) {
                    date.push(i);
                    confirmed.push(data.cases[i])
                }
                for (let i of Object.keys(data.recovered))
                    recovered.push(data.recovered[i])
                for (let i of Object.keys(data.deaths))
                    deaths.push(data.deaths[i])
                dispatch(getInfoByDate({
                    numbDate,
                    date,
                    confirmed,
                    recovered,
                    deaths,
                }))
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getAllCountryInfos();
        countryISO !== 'Global' ? changeInfoDispatch(countryName) : getTodayInfo();
        getInfoChart(20);
    }, [countryName]);
    return (
        <div className="header">
            <h1>COVID-19 TRACKER</h1>
            <FormControl >
                <Select value={countryISO} onChange={changeOption}>
                    <MenuItem value={'Global'} >Global</MenuItem>
                    {allCountryInfos.map((country, index) =>
                        <MenuItem key={index} value={country.countryInfo.iso2} >{country.countryName}</MenuItem>
                    )}
                </Select>
            </FormControl>

        </div >
    )
}