import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedores from "./tabelas/TabelaFornecedor";
import { useState } from "react";

export default function TelaCadastroFornecedor(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaFornecedor, setListaFornecedor] = useState([]);
    const [fornecedorParaEdicao, setFornecedorParaEdicao] = useState({
        id:'',
        nomeEmpresa:'',
        telefone:'',
        endereco:'',
        email:''
    });
    const [modoEdicao, setModoEdicao] = useState(false);


    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadFornecedor exibirFormulario={setExibirFormulario} 
                                                       listaFornecedor={listaFornecedor}
                                                       setListaFornecedor={setListaFornecedor}
                                                       fornecedorParaEdicao={fornecedorParaEdicao}
                                                       setFornecedorParaEdicao={setFornecedorParaEdicao}
                                                       modoEdicao={modoEdicao}
                                                       setModoEdicao={setModoEdicao}
                                                       /> 
                                     : 
                                      <TabelaFornecedores exibirFormulario={setExibirFormulario}
                                                      listaFornecedor={listaFornecedor}
                                                      setListaFornecedor={setListaFornecedor}
                                                      fornecedorParaEdicao={fornecedorParaEdicao}
                                                      setFornecedorParaEdicao={setFornecedorParaEdicao}
                                                      modoEdicao={modoEdicao}
                                                      setModoEdicao={setModoEdicao}
                                                      />
                }
            </Pagina>
        </Container>
    )
}