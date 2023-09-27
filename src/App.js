//Import library´s or hooks
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import components
import NavBar from "./components/navBar";

//Import pages
import Main from "./pages/main";
import AdicionaLiquidez from './pages/liquidezComissao/adicionarLiquidez';
import FinancialPage from './pages/financialPage';
import LiquidezComissaoHomePage from './pages/liquidezComissao/liquidezComissaoHomePage';
import MostrarComissao from './pages/liquidezComissao/mostrarComissao';
import Comissoes from './pages/liquidezComissao/comissoes';


//import style
import './styles/reset.css'
//Create settings


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Pagina financeira  */}
        <Route path="/financialPage" element={<FinancialPage />} />
          {/* Relacionado as comissões de representantes */}
          <Route path="/liquidezComissaoHomePage" element={<LiquidezComissaoHomePage />} />
          <Route path="/adicionarLiquidez" element={<AdicionaLiquidez />} />
          <Route path="/mostrarComissao" element={<MostrarComissao />} />
          <Route path="/comissoes" element={<Comissoes />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    
  );
}

export default App;
