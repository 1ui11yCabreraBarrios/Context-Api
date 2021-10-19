import { useContext } from "react";
import ThemeContext from "./Context/ThemeContext";
import LanguageContext from "./Context/LanguageContext";
import AuthContext from "./Context/AuthContext";
const MainContext = () => {
    const { theme } = useContext(ThemeContext);
    const {texts}=useContext(LanguageContext)
    const {auth} =useContext(AuthContext);
    return (
      <main className={theme}>
        {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
        <p>{texts.mainContent}</p>
      </main>
    );
  };
  
  export default MainContext;