
import { AuthProvider } from "./Context/AuthContext";
import { LanguageProvider } from "./Context/LanguageContext";
import { ThemeProvider } from "./Context/ThemeContext";
import Footer from "./FooterContext";
import Header from "./HeaderContext";
import Main from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
          <Header />
          <Main />
          <Footer />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;
