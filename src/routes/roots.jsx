import React from "react";
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import ListaCell from "../pages/ListaCell";
import Cadastrar from "../pages/Cadastrar";
import NotFound from "../pages/NotFound";
import Controle from "../pages/Controle";
import Editar from "../pages/Editar";


const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <ListaCell/> } />
                <Route path="/administrar/cadastrar" element={ <Cadastrar/> } />
                <Route path="/controle" element={ <Controle/> } />
                <Route path="/editar/:id" element={ <Editar/> } />
                <Route path="*" element={ <NotFound/> } />
            </Routes>
        </Router>
    );
}

export default Root;