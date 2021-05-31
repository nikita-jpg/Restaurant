import '../Tables/tables.css';
import '../Tables/tables__content.css';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Table } from './Table/Table'
import axios from 'axios';


const Tables = () =>{
    const uriTables = "http://localhost:8080/booking/getRecord?date="
    const tables = []

    const [value, onChange] = useState(new Date());
    let strDate = value.toLocaleString().slice(0,value.toLocaleString().indexOf(","))
    // strDate = [...strDate].reduce((prev,next)=>next+prev)

    const onDateChange = value => {
        onChange(value)
        console.log(strDate)

        axios.get(uriTables + value.value).then((resp) =>{
            const allTables = resp.data;
            console.log(allTables)
        })
    }


    for(let i=0;i<40;i++){
        tables.push(<Table></Table>)
    }


    return(
    <div className="tables">
        <div className="tables__content">
            {/* {tables} */}
            <DatePicker
            onChange={onDateChange}
            value={value}
            format={"yyyy.MM.dd"}
            />
        </div>
    </div>
    )
}


export {Tables}