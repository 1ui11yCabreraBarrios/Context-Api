import React,{ createContext,useState} from 'react';

const ContextTheme = createContext();

const initialTheme="light";

const ThemeProvider=({children})=>{

    const [theme, setTheme] = useState(initialTheme);
    console.log(theme)

    const handleTheme =(e)=>{

        if (e.target.value === "light") {
            setTheme("light");
          } else {
            setTheme("dark");
          }

    };
    const data ={ theme,handleTheme};

    return(<ContextTheme.Provider value={data}>{children}</ContextTheme.Provider>)
};
export { ThemeProvider };
export default ContextTheme;