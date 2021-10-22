import MyPageContext from "./ContextApi/MyPageContext";
import CrudApi from "./CrudContextApi/CrudApi";
import { CrudProvider } from "./CrudContextApi/Context/CrudContextApi";
import MyPage from "./SinContext/Mypage";
import { LanguageProvider } from "./ContextApi/Context/LanguageContext";

function App() {
  return (
    <div className="App">
      
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <LanguageProvider>
        <CrudProvider>
          <CrudApi />
        </CrudProvider>
      </LanguageProvider>
      <MyPageContext />
      <br />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
