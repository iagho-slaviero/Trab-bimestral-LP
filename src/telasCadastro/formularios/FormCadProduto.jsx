import { useState } from "react";
import MensagemSucesso from "../components/MensagemSucesso";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
export default function FormCadProduto(props) {
    
    const produtoVazio = {
            id:'',
            nome:'',
            preco:'',
            fabricante:'',
            categoria:''
        }
        const [exibirMensagem, setExibirMensagem] = useState(false);
        const [mensagemSucesso, setMensagemSucesso] = useState("");
        const estadoInicialProduto = props.produtoParaEdicao;
        const [produto, setProduto] = useState(estadoInicialProduto);
        const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setProduto({...produto,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            const verificaID  = props.listaProduto.find((itemProduto) => itemProduto.id === produto.id);
            if(!props.modoEdicao){
                if(verificaID){

                }else{
                    props.setListaProduto([...props.listaProduto,produto]);
                }
            }
            else{

                props.setListaProduto([...props.listaProduto.filter((itemProduto)=>itemProduto.id !== produto.id), produto]);
                props.setModoEdicao(false);
                props.setProdutoParaEdicao(produtoVazio);                
            }
            setProduto(produtoVazio);
            setFormValidado(false);
            if(props.modoEdicao === false){
                if(verificaID){
                    setMensagemSucesso("Produto já cadastrado!");
                    setExibirMensagem(true);
                }else{
                    setMensagemSucesso("Cadastro concluído com sucesso!");
                    setExibirMensagem(true);
                }
            }
            else{
                setMensagemSucesso("Alteração realizada com sucesso!");
                setExibirMensagem(true);
            }
        }
        else{
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Container>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="ID:"
                                className="mb-3"
                            >

                                <Form.Control 
                                    type="text" 
                                    placeholder="1895" 
                                    id="id" 
                                    name="id" 
                                    value={produto.id}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Id do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nome do produto" 
                                    id="nome" 
                                    name="nome" 
                                    value={produto.nome}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome do produto!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                label="Preço:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="R$ 00.00" 
                                    id="preco" 
                                    name="preco" 
                                    onChange={manipularMudancas}
                                    value={produto.preco}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Preco!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                label="Fabricante:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Bandai" 
                                    id="fabricante" 
                                    name="fabricante" 
                                    onChange={manipularMudancas}
                                    value={produto.fabricante}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o fabricante!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="Categoria:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="..." 
                                    id="categoria" 
                                    name="categoria" 
                                    onChange={manipularMudancas}
                                    value={produto.categoria}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar":"Cadastrar"}</Button>
                <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                        }>Voltar</Button>
            </Form>
            {exibirMensagem && <MensagemSucesso mensagem={mensagemSucesso} />}
        </Container>
    );
}