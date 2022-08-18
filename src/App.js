//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DiscussMain from "./components/Discuss/DiscussMain";
import BalanceGameList from './components/BalanceGame/BalanceGameList';
import BalanceGameCard from "./components/BalanceGame/BalanceGameCard";
import NotFound from "./components/NotFound";
import Main from "./components/Main";

//components


//css
import "./App.css";
import "./css/Header.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/balancegame/" element={<BalanceGameList />}></Route>
          <Route path="/balancegame/main" element={<BalanceGameCard />}></Route>
          <Route path="/discuss" element={<DiscussMain />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
