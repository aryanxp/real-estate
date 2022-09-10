import "./App.css";
import Banner from "./Components/Banner";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./pages/PropertyDetails";
import Header from "./Components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app_components">
      <Home />
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      {/* Home */}
      {/* Header */}
      {/* Banner */}
      {/* Search */}
      {/* Cards */}
      {/* Footer */}
      {/* SearchPage */}
      {/* Header */}
      {/* ... */}
    </div>
  );
}

export default App;
