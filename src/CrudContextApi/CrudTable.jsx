import React, { useContext } from 'react';
import CrudContext from './CrudContextApi';
import CrudTableRow from './CrudTableRow';
function CrudTable() {

    const {db:data} =useContext(CrudContext)
    return (
        <div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>

                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Color</th>
                    <th>Transmision</th>
                    <th>Precio</th>
                    <th>puertas</th>
                    <th>Año</th>
                    <th>Acciones</th>
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
