import React, { useContext } from 'react';
import CrudContext from './Context/CrudContextApi';
import CrudTableRow from './CrudTableRow';
function CrudTable() {

    const {db:data,texts,theme} =useContext(CrudContext)
    return (
        <div className={theme}>
        <h3  className={theme}>{texts.headerSubtitle1}</h3>
        <table >
            <thead>
                <tr  className={theme}>

                    <th>{texts.headerTitle5}</th>
                    <th>{texts.headerTitle6}</th>
                    <th>{texts.headerTitle7}</th>
                    <th>{texts.headerTitle8}</th>
                    <th>{texts.headerTitle9}</th>
                    <th>{texts.headerTitle10}</th>
                    <th>{texts.headerTitle11}</th>
                    <th>{texts.headerTitle12}</th>
                   
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (data.map((value,) => (<CrudTableRow key={value.id} value={value}  />))):(<tr><td colSpan="8">No hay Datos</td></tr>) 
                }

            </tbody>
        </table>
    </div>
    )
}

export default CrudTable
