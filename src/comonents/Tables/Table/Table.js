import '../Table/table.css'
const Table = (number) =>{
    console.log(number)
    return(
    <div className="table">
        <div className="table__number">{number.number}</div>
    </div>
    )
}


export {Table}