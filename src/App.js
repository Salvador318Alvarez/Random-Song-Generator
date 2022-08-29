import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div>
      <body>
        <Navbar />
        <div className="content">
          <Home/>
        </div>
      </body>
    </div>
  );
}

export default App;
