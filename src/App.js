// component
import BalanceGameCard from "./components/BalanceGame/BalanceGameCard";
import BalanceGameList from "./components/BalanceGame/BalanceGameList";
import BalanceGameMyList from "./components/BalanceGame/BalanceGameMyList";
import "./App.css";
import Comments from "./components/BalanceGame/Comments";

function App() {
  return (
    <div className="App">
      <BalanceGameCard className="Heart" />
      <BalanceGameList />
      <BalanceGameMyList />
      <Comments />
    </div>
  );
}

export default App;
