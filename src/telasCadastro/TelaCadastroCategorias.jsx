import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCategorias from "./formularios/FormCadCategorias";
import TabelaCategorias from "./tabelas/TabelaCategorias";
import { useState } from "react";

export default function TelaCadastroCategoria(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCategoria, setListaCategoria] = useState([]);
    const [categoriaParaEdicao, setCategoriaParaEdicao] = useState({
        nome:'',
        descricao:''

    });
    const [modoEdicao, setModoEdicao] = useState(false);


    return (
        <Container>
            <Pagina>
                {
                     exibirFormulario ? <FormCadCategorias exibirFormulario={setExibirFormulario}
                                                       listaCategoria={listaCategoria}
                                                       setListaCategoria={setListaCategoria}
                                                       categoriaParaEdicao={categoriaParaEdicao}
                                                       setCategoriaParaEdicao={setCategoriaParaEdicao}
                                                       modoEdicao={modoEdicao}
                                                       setModoEdicao={setModoEdicao}
                                                       
                                                       /> 
                                     : 
                                      <TabelaCategorias exibirFormulario={setExibirFormulario}
                                                      listaCategoria={listaCategoria}
                                                      setListaCategoria={setListaCategoria}
                                                      categoriaParaEdicao={categoriaParaEdicao}
                                                      setCategoriaParaEdicao={setCategoriaParaEdicao}
                                                      modoEdicao={modoEdicao}
                                                      setModoEdicao={setModoEdicao}
                                                      />
                }
            </Pagina>
        </Container>
    )
}