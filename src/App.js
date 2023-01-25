import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/myPortfolioWebsite" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
