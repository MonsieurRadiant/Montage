import './App.css';
import Navbar from "./components/Navbar";
import MovieInfo from "./components/MovieInfo";
import {Login} from "./components/Login/Login";
import {Register} from "./components/Login/Register";
import CoverPage from "./components/CoverPage";
import RankList from "./components/RankList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieInfo />
      <Login />
      <RankList />
      <CoverPage />
    </div>
  );
}

export default App;
