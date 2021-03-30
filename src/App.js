import './App.css';
import Main from "./componets/Main";
import Wrapper from "./componets/Wrapper";
import Header from "./componets/Header";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}


export default App;
