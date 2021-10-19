import { useContext } from "react";
import LanguageContext from "./Context/LanguageContext";
import ThemeContext from "./Context/ThemeContext";
const FooterContext = () => {
    const { theme } = useContext(ThemeContext);
    const {texts}= useContext(LanguageContext);
    return (
      <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
      </footer>
    );
  };
  
  export default FooterContext;