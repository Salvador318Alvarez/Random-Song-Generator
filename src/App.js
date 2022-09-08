import Navbar from "./Navbar";
import Home from "./Home";
import Songs from "./Songs";
import Add from "./Add";
import SongDetails from "./SongDetails";
import NotFound from "./NotFound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element ={<Home/>} />
              <Route path="/songs" element = {<Songs/>} />
              <Route path="/add" element = {<Add/>} />
              <Route path="/song/:id" element = {<SongDetails />} />
              <Route path="*" element = {<NotFound />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
