import '../Table/table.css'
const Table = ({number, modalPage}) =>{

    // const openModalPage = () => {
    //     modalPage(true)
    // }

    return(
    <div className="table">
        <div className="table__number" >{number}</div>
    </div>
    )
}


export {Table}