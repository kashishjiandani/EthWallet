import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Homepage, Transaction, Data } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/data" element={<Data />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
