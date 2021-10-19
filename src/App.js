import MyPageContext from "./ContextApi/MyPageContext";
import MyPage from "./SinContext/Mypage";
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
      <MyPageContext/>
      <br/>
      <hr/>
      <MyPage />
    </div>
  );
}

export default App;
