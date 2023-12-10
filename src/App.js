//Import library´s or hooks
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Import components
import NavBar from "./components/navBar";

//Import pages
import Main from "./pages/main/main";

  //PADRÃO
    import Financeiro from "./pages/financeiro";
    import Clientes from './pages/clientes';
  //REPRESENTACAO
    import RepresentacaoHome from './pages/representacao/representacaoHome';
    import AdicionaLiquidez from './pages/representacao/liquidezComissao/adicionarLiquidez';
    import FinancialPage from './pages/representacao/financialPage';
    import LiquidezComissaoHomePage from './pages/representacao/liquidezComissao/liquidezComissaoHomePage';
    import MostrarComissao from './pages/representacao/liquidezComissao/mostrarComissao';
    import Comissoes from './pages/representacao/liquidezComissao/comissoes';
  //ENERGIA
    import Home from './pages/energia/energiaHome';
    import UnidadeConsumidoraCpfSubmission from './pages/energia/submission';
    import FinanceiroUsina from './pages/energia/financeiro/financeiroUsina';
    import Leituras from './pages/energia/leituras';
    import ClienteUsinas from './pages/energia/financeiro/clienteUsinas';
    import Outros from './pages/energia/financeiro/outros';
    import LojaHome from './pages/loja/lojaHome';
  //LOJA
    import DropshippingHomePage from './pages/loja/dropshipping/dropshippingHomePage';
    import DropshippingConfiguration from './pages/loja/dropshipping/dropshippingConfiguration';
    import DropshippingAddSupplier from './pages/loja/dropshipping/dropshippingAddSupplier';

//import style
import './styles/reset.css'
//Create settings


function App() {
  return (
    <Router>
      <Routes>
        {/* PADRAO */}
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/financeiro' element={<Financeiro />} />
        {/* REPRESENTACAO */}
          {/* Pagina financeira  */}
          <Route path="/representacaoHome" element={<RepresentacaoHome />} />
          <Route path="/financialPage" element={<FinancialPage />} />
          {/* Relacionado as comissões de representantes */}
            <Route path="/liquidezComissaoHomePage" element={<LiquidezComissaoHomePage />} />
            <Route path="/adicionarLiquidez" element={<AdicionaLiquidez />} />
            <Route path="/mostrarComissao" element={<MostrarComissao />} />
            <Route path="/comissoes" element={<Comissoes />} />
        {/* ENERGIA */}
          <Route path='/energiaHome' element={<Home />} />
          <Route path='/requisicao' element={<UnidadeConsumidoraCpfSubmission />} />
          <Route path='/financeiroUsina' element={<FinanceiroUsina />} />
          <Route path='/leituras' element={<Leituras />} />
          <Route path='/clienteUsinas' element={<ClienteUsinas/>} />
          <Route path='/outros' element={<Outros/>} />
        {/* LOJA */}
          <Route path='/lojaHome' element={<LojaHome/>} />
          <Route path='/dropshippingHomePage' element={<DropshippingHomePage/>} />
          <Route path='/dropshippingConfiguration' element={<DropshippingConfiguration/>} />
          <Route path='/dropshippingAddSupplier' element={<DropshippingAddSupplier/>} />

        <Route path="/" element={<Main />} />
      </Routes>
      <Main/>
    </Router>
  );
}

export default App;
