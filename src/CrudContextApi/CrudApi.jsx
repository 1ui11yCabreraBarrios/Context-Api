import React,{useContext} from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import "../index.css";
import Loader from "./Loader";
import Message from "./Message";
import { HashRouter, Route, NavLink, Switch } from "react-router-dom";
import Error404 from "./Error404";
import CrudContext from "./Context/CrudContextApi";






const CrudApi = () => {
  const { db, loading, error,theme,handleTheme,texts,handleLanguage } = useContext(CrudContext);


 
 

  return (
    <div  className={theme}>
      <HashRouter basename="autos">
        <header >
          <h2>{texts.headerTitle}</h2>
          <nav>
            <NavLink to="/" activeClassName="active">
              {texts.headerTitle1}
            </NavLink>
            <NavLink to="/agregar" activeClassName="active">
               {texts.headerTitle2}
            </NavLink>
            <select name="language" onChange={handleLanguage} >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>
            <input
          type="radio"
          name="theme"
          id="light-context-1"
          onClick={handleTheme}
          value="light"
        />
        <label htmlFor="light-context-1">{texts.headerLight}</label>
        <input
          type="radio"
          name="theme"
          id="dark-context-2"
          onClick={handleTheme}
          value="dark"
        />
        <label htmlFor="dark-context-2">{texts.headerDark}</label>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <h2> {texts.headerSubtitle}</h2>
            {loading && <Loader />}
            {error && (
              <Message
                msg={`Error ${error.status}:${error.statusText}`}
                bgColor="#dc3545"
              />
            )}
            {db && <CrudTable />}
          </Route>
          <Route exact path="/agregar">
            <CrudForm />
          </Route>
          <Route exact path="/editar/:id">
            <CrudForm />
          </Route>
          <Route path="*" children={<Error404 />} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default CrudApi;
