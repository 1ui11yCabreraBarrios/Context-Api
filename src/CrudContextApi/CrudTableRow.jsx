import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import CrudContext from './Context/CrudContextApi';

function CrudTableRow({value}) {

    const {setDataToEdit,deleteData,texts,theme}=useContext(CrudContext)

    let {marca,modelo,color,transmision,precio,puertas,year,id}= value;
    let history =useHistory()
    const handleEdit=()=>{
        setDataToEdit(value)
        history.push(`/editar/${id}`)
    }
   
    return (
        <tr className={theme}>
    
        <td>{marca}</td>
        <td>{modelo}</td>
        <td>{color}</td>
        <td>{transmision}</td>
        <td>{precio}</td>
        <td>{puertas}</td>
        <td>{year}</td>
        
        <td><button onClick={handleEdit}>{texts.headerTitle13}</button>
        <button onClick={() => deleteData(id)} style={{margin:"1rem"}}>{texts.headerTitle14}</button></td>
        </tr>
        
                    
               
            
    )
}

export default CrudTableRow
