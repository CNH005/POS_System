import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Orders, Home, Auth } from "./pages";
import Header from "./components/shared/Header";
import { BottomNav } from "./components/shared/BottomNav";

function App() {
  return (
    <>
      <Router>
        <Header />
        <BottomNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
