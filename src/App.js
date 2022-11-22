import Header from "./components/header";
import Footer from "./components/footer/index.";

import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";


function App() {
  
  return (
    <div className="container py-3">

    <Header />
    <HashRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
  </HashRouter>
   

     <Footer />
    </div>
  );
}

export default App;
 