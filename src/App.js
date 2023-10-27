//Import library´s or hooks
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import components
import NavBar from "./components/navBar";

//Import pages
  //REPRESENTACAO
    import Main from "./pages/main";
    import AdicionaLiquidez from './pages/representacao/liquidezComissao/adicionarLiquidez';
    import FinancialPage from './pages/representacao/financialPage';
    import LiquidezComissaoHomePage from './pages/representacao/liquidezComissao/liquidezComissaoHomePage';
    import MostrarComissao from './pages/representacao/liquidezComissao/mostrarComissao';
    import Comissoes from './pages/representacao/liquidezComissao/comissoes';
  //ENERGIA
    import Home from './pages/energia/energiaHome';
    import UnidadeConsumidoraCpfSubmission from './pages/energia/submission';
    import Financeiro from './pages/energia/financeiro';
    import Leituras from './pages/energia/leituras';
    import Clientes from './pages/clientes';

//import style
import './styles/reset.css'
//Create settings


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* REPRESENTACAO */}
          {/* Pagina financeira  */}
          <Route path="/financialPage" element={<FinancialPage />} />
          {/* Relacionado as comissões de representantes */}
            <Route path="/liquidezComissaoHomePage" element={<LiquidezComissaoHomePage />} />
            <Route path="/adicionarLiquidez" element={<AdicionaLiquidez />} />
            <Route path="/mostrarComissao" element={<MostrarComissao />} />
            <Route path="/comissoes" element={<Comissoes />} />
        {/* ENERGIA */}
          <Route path='/energiaHome' element={<Home />} />
          <Route path='/requisicao' element={<UnidadeConsumidoraCpfSubmission />} />
          <Route path='/financeiro' element={<Financeiro />} />
          <Route path='/leituras' element={<Leituras />} />
          <Route path='/clientes' element={<Clientes />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
    
  );
}

export default App;
