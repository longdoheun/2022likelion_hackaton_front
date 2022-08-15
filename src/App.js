// components
import BalanceGameCard from "./components/BalanceGame/BalanceGameCard";
import BalanceGameList from "./components/BalanceGame/BalanceGameList";
import BalanceGameMyList from "./components/BalanceGame/BalanceGameMyList";
import Comments from "./components/BalanceGame/Comments";

//discuss
import DiscussLoading from "./components/Discuss/DiscussLoading";
import DiscussCard from "./components/Discuss/DiscussCard";
import DiscussAlert from "./components/Discuss/DiscussAlert";
import DiscussVote from "./components/Discuss/DiscussVote";
import DiscussResult from "./components/Discuss/DiscussResult";
import DiscussTalk from "./components/Discuss/DiscussTalk";

//css
import "./App.css";

function App() {
  return (
    <div className="App">
      <BalanceGameCard className="Heart" />
      <BalanceGameList />
      <BalanceGameMyList />
      <Comments />
      <DiscussLoading loading_type={"vote"}/>
      <DiscussLoading loading_type={"match"}/>
      <DiscussCard />
      <DiscussAlert/>
      <DiscussVote />
      <DiscussResult/>
      <DiscussTalk/>
    </div>
  );
}

export default App;
