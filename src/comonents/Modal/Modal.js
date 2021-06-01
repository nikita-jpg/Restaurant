import axios from 'axios';
import React, { useState } from 'react';
import './modal.css'

const Modal = ({modal, setModal}) => {
    const makeRecordUri = "http://localhost:8080/booking/makeRecord?"
    const[inputName, setName] = useState("")
    const[inputSecondName, setSecondName] = useState("")
    const[inputTelNumber, setTelNumber] = useState("")

    // let record = {
    //     deskNumber:modal.tableId,
    //     date: modal.date,
    //     timeStart: "14:00",
    //     timeEnd: "15:00",
    //     clientName: inputName,
    //     clientSecondName: inputSecondName,
    //     clientTelNumber: inputTelNumber,
    // }

    const sendRecord = () => {
        // console.log(record)
        axios({
            method: 'get',
            url: makeRecordUri,
            params: {
                deskNumber:modal.tableId,
                date: modal.date,
                timeStart: "14:00",
                timeEnd: "15:00",
                clientName: inputName,
                clientSecondName: inputSecondName,
                clientTelNumber: inputTelNumber,
            }
           })
    }

    return(
        <div className={modal.isOpen ? "modal__background modal_active" : "modal__background"} onClick={() => setModal({isOpen: false})}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <input value={inputName} onChange={(event) => setName(event.target.value)}></input>
                <input value={inputSecondName} onChange={(event) => setSecondName(event.target.value)}></input>
                <input value={inputTelNumber} onChange={(event) => setTelNumber(event.target.value)}></input>
                <button onClick={sendRecord}></button>
            </div>
        </div>
    )
}

export {Modal}