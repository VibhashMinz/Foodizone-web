import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
