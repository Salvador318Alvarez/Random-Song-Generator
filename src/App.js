import Navbar from "./Navbar";
import Home from "./Home";
import List from "./List";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element ={<Home/>} />

            </Routes>
            <Home/>
          </div>
      </div>
    </Router>
  );
}

export default App;
