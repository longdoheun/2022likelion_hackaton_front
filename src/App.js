//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DiscussMain from "./components/Discuss/DiscussMain";
import BalanceGameMain from "./components/BalanceGame/BalanceGameMain";
import NotFound from "./components/NotFound";
import Main from "./components/Main";

//components


//css
import "./App.css";
import "./css/Header.css";
import DiscussTalk from "./components/Discuss/DiscussTalk";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/balancegame" element={<BalanceGameMain />}></Route>
          <Route path="/discussion" element={<DiscussMain />}></Route>
          <Route path="/discussion/talk" element={<DiscussTalk />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
