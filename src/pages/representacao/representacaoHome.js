import NavBar from "../../components/navBar";
import NavBarFinancial from "../../components/representacao/navBarRepresentanteFinancial";
import NavBarRepresentante from "../../components/representacao/navBarRepresentante";

import "../../styles/components/espacamento.css";

export default function RepresentacaoHome(){
  
    return (
        
        <div className="body">
            <NavBar/>
            <NavBarRepresentante />
            

        </div>

    )
  
}

