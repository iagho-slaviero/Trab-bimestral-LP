import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProduto";
import { useState } from "react";

export default function TelaCadastroProduto(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaProduto, setListaProduto] = useState([]);
    const [produtoParaEdicao, setProdutoParaEdicao] = useState({
        id:'',
        nome:'',
        preco:'',
        fabricante:'',
        categoria:''
    });
    const [modoEdicao, setModoEdicao] = useState(false);


    return (
        <Container>
            <Pagina>
                {
                    exibirFormulario ? <FormCadProduto exibirFormulario={setExibirFormulario} 
                                                       listaProduto={listaProduto}
                                                       setListaProduto={setListaProduto}
                                                       produtoParaEdicao={produtoParaEdicao}
                                                       setProdutoParaEdicao={setProdutoParaEdicao}
                                                       modoEdicao={modoEdicao}
                                                       setModoEdicao={setModoEdicao}
                                                       /> 
                                     : 
                                      <TabelaProdutos exibirFormulario={setExibirFormulario}
                                                      listaProduto={listaProduto}
                                                      setListaProduto={setListaProduto}
                                                      produtoParaEdicao={produtoParaEdicao}
                                                      setProdutoParaEdicao={setProdutoParaEdicao}
                                                      modoEdicao={modoEdicao}
                                                      setModoEdicao={setModoEdicao}
                                                      />
                }
            </Pagina>
        </Container>
    )
}