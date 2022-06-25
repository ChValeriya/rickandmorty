import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Characters from './pages/Characters';
import Character from './pages/Character';

import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:characterId" element={<Character />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
