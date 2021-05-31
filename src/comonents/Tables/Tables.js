import '../Tables/tables.css';
import '../Tables/tables__content.css';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Table } from './Table/Table'
import { format } from "date-fns";
import axios from 'axios';


const Tables = () =>{
    const uriTables = "http://localhost:8080/booking/getRecord?date="
    const tables = []

    const [value, onChange] = useState(new Date());

    const onDateChange = value => {
        onChange(value)

        if(value!=null){
            axios.get(uriTables + format(value,"yyyy.MM.dd")).then((resp) =>{
                const allTables = resp.data;
                console.log(allTables)
            })
        }
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