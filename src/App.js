//Import library´s or hooks
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import components
import NavBar from "./components/navBar";

//Import pages
import Main from "./pages/main";
import TabelaLiquidez from './pages/tabelaLiquidez';

//import style
import './styles/reset.css'
//Create settings


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/tabelaLiquidez" element={<TabelaLiquidez />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    
  );
}

export default App;
