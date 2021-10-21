import React, { useEffect } from 'react'
import CrudForm from './CrudForm'
import CrudTable  from './CrudTable';
import "../index.css";
import  Loader  from './Loader';
import  Message  from './Message';
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import Error404 from './Error404';
import { useContext } from 'react';
import CrudContext from './CrudContextApi';



const CrudApi = () => {

   const {db,loading,error}=  useContext(CrudContext)
 
    return (
        <div>


            <HashRouter basename="autos">
                <header>
                    <h2>Rutas</h2>
                    <nav>
                        <NavLink to="/" activeClassName="active">Autos</NavLink>
                        <NavLink to="/agregar" activeClassName="active">Agregar</NavLink>
                    </nav>

                </header>
                <Switch>
                    <Route exact path="/"><h2> Home de Autos</h2>
                        {loading && <Loader />}
                        {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545" />}
                        {db && <CrudTable/> }
                    </Route>
                    <Route exact path="/agregar"><CrudForm />
                    </Route>
                    <Route exact path="/editar/:id"><CrudForm/>
                    </Route>
                    <Route path="*" children={<Error404 />} />
                </Switch>


            </HashRouter>
           
        </div>
    )

}

export default CrudApi