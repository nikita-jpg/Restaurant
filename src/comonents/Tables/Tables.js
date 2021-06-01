import '../Tables/tables.css';
import '../Tables/tables__content.css';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { Table } from './Table/Table'
import { Modal } from '../Modal/Modal'
import { format } from "date-fns";
import axios from 'axios';



const Tables = () =>{
    const uriTables = "http://localhost:8080/booking/getRecord?date="

    const [value, onChange] = useState(new Date())
    const [tables, setAppState] = useState([])
    const [modalIsOpen, setModal] = useState(true)

    const onDateChange = value => {
        onChange(value)

        if(value!=null){
            axios.get(uriTables + format(value,"yyyy.MM.dd")).then((resp) =>{
                const allTables = resp.data;
                setAppState(allTables)
            })
        }
    }

    return(
    <div className="tables">
        <Modal isOpen={modalIsOpen} setOpen={setModal}></Modal>
        <DatePicker
            onChange={onDateChange}
            value={value}
            format={"yyyy.MM.dd"}/>
        <div className="tables__content">
            {tables.map(table => (
                <Table number={table.tableId}></Table>
            ))}
        </div>
    </div>
    )
}


export {Tables}