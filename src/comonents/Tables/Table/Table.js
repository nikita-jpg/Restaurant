import '../Table/table.css'
const Table = ({number,date, setModal}) =>{

    return(
    <div className="table" onClick={() => setModal({isOpen: true, tableId: number, freeTime: date})}>
        <div className="table__number" >{number}</div>
    </div>
    )
}


export {Table}