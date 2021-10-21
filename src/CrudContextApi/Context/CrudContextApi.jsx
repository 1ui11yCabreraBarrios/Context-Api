import React, { createContext, useEffect } from "react";
import { services } from "../../Services/Services";

const CrudContext = createContext();
const initialTheme = "light";


const initialLanguage = "es";
const translations = {
  es: {
    headerTitle: "Mi aplicación Crud,Rutas y ContextApi",
    headerTitle1: "Autos",
    headerTitle2: "Agregar",
    headerTitle3: "Guardar",
    headerTitle4: "Limpiar",
    headerTitle5: "Marca",
    headerTitle6: "Modelo",
    headerTitle7: "Color",
    headerTitle8: "Transmision",
    headerTitle9: "Precio",
    headerTitle10: "Puertas",
    headerTitle11: "Año",
    headerTitle12: "Acciones",
    headerTitle13: "Editar",
    headerTitle14: "Eliminar",
    headerSubtitle: "Bienveniodos a Autos Deportivos",
    headerSubtitle1: "Tabla de Datos",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application Crud,Routes and  ContextAPI",
    headerTitle1: "Cars",
    headerTitle2: "Add",
    headerTitle3: "Save",
    headerTitle4: "Clear",
    headerTitle5: "Mark",
    headerTitle6: "Model",
    headerTitle7: "Color",
    headerTitle8: "Transmission",
    headerTitle9: "Price",
    headerTitle10: "Doors",
    headerTitle11: "Year",
    headerTitle12: "Actions",
    headerTitle13: "Edit",
    headerTitle14: "Delete",
    headerSubtitle: "Welcome a cars Sports",
    headerSubtitle1: "Data table",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

function CrudProvider({ children }) {
  const [db, setDb] = React.useState(null);
  const [dataToEdit, setDataToEdit] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [theme, setTheme] = React.useState(initialTheme);
  const [language, setLanguage] = React.useState(initialLanguage);
  const [texts, setTexts] = React.useState(translations[language]);

  let api = services();
  let url = "http://localhost:5000/autos";

  useEffect(() => {
    setLoading(true);
    services()
      .get(url)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((value) => (value.id === data.id ? data : value));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el Id'${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      console.log(endpoint);
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((value) => value.id !== id);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };
  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };
  const data = {
    db,
    updateData,
    deleteData,
    createData,
    error,
    loading,
    dataToEdit,
    setDataToEdit,
    theme,
    handleTheme,
    texts,
    handleLanguage
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
}

export { CrudProvider };
export default CrudContext;
