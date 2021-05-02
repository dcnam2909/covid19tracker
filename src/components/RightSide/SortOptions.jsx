import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { changeOption } from '../../covidSlice';
import '../css/SortOptions.css';


export default function SortOptions() {
    const changeSort = useDispatch();
    const handleChangeSort = (e) => {
        changeSort(changeOption({
            option: e.target.value,
        }));
    }
    return (
        <div className="right-side__header">
            <h1>All country sort by</h1>
            <FormControl>
                <Select defaultValue="cases" onChange={handleChangeSort}>
                    <MenuItem value="cases">Cases</MenuItem>
                    <MenuItem value="deaths" >Deaths</MenuItem>
                    <MenuItem value="recovered" >Recovered</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
