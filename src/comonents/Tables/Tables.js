import '../Tables/tables.css'
import '../Tables/tables__content.css'
import { Table } from './Table/Table'
const Tables = () =>{
    let tables = []

    for(let i=0;i<40;i++){
        tables.push(<Table></Table>)
    }

    return(
    <div className="tables">
        <div className="tables__content">
            {tables}
        </div>
    </div>
    )
}


export {Tables}