import Navbar from "./Navbar";
import Randomizer from "./Randomizer";
import NotFound from "./NotFound";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element ={<Randomizer/>} />
              <Route path="*" element = {<NotFound />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
