import '../Tables/tables.css';
import '../Tables/tables__content.css';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Table } from './Table/Table'
import { format } from "date-fns";
import axios from 'axios';


const Tables = () =>{
    const uriTables = "http://localhost:8080/booking/getRecord?date="

    const [value, onChange] = useState(new Date());
    const [tables, setAppState] = useState(new Map());

    const onDateChange = value => {
        onChange(value)

        if(value!=null){
            axios.get(uriTables + format(value,"yyyy.MM.dd")).then((resp) =>{
                const allTables = resp.data;
                setAppState(allTables)
                console.log(tables)
            })
        }
    }

    return(
    <div className="tables">
        <div className="tables__content">
        <DatePicker
            onChange={onDateChange}
            value={value}
            format={"yyyy.MM.dd"}/>
            {tables.map(table => (
                <Table></Table>
            ))}
        </div>
    </div>
    )
}


export {Tables}