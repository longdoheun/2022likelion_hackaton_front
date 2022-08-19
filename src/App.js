//routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DiscussMain from "./components/Discuss/DiscussMain";
import BalanceGameList from './components/BalanceGame/BalanceGameList';
import BalanceGameMain from './components/BalanceGame/BalanceGameMain';
import NotFound from "./components/NotFound";
import Main from "./components/Main";
import Footer from "./components/Footer";

//components


//css
import "./App.css";
import "./css/Header.css";
import DiscussResult from "./components/Discuss/DiscussResult";
import DiscussVote from "./components/Discuss/DiscussVote";
import DiscussTalkMain from "./components/Discuss/DiscussTalkMain";

function App() {
  return (
    <div className="App flex-c">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
<<<<<<< HEAD
          <Route path="/balancegame" element={<BalanceGameMain />}></Route>
=======
>>>>>>> 83387cf04f3fbb754ec7333a4e9207a81bcbc918
          <Route path="/discussion" element={<DiscussMain />}></Route>
          <Route path="/discussion/talk" element={<DiscussTalkMain />}></Route>
          <Route path="/discussion/vote" element={<DiscussVote />}></Route>
          <Route path="/discussion/result" element={<DiscussResult />}></Route>
          <Route path="/balancegame/" element={<BalanceGameList />}></Route>
          <Route path="/balancegame/main" element={<BalanceGameMain />}></Route>
          <Route path="/discuss" element={<DiscussMain />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
