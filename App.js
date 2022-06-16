import { Navbar } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
/* import Characters from "./components/Characters/Characters";
import useFetch from "./hooks/useFetch"; */
import About from "./pages/About";
import Main from "./pages/Main";

function App() {
  /*   const [endpoint, setEndpoint] = useState("character");
       const [data, error, loading] = useFetch(endpoint);  */

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      {/* <Characters characters={data} /> */}
    </div>
  );
}

export default App;
