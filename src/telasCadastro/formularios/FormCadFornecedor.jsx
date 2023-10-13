import { useState } from "react";
import MensagemSucesso from "../components/MensagemSucesso";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
export default function FormCadFornecedor(props) {
    
    const fornecedorVazio = {
            id:'',
            nomeEmpresa:'',
            telefone:'',
            endereco:'',
            email:''
        }
        const [exibirMensagem, setExibirMensagem] = useState(false);
        const [mensagemSucesso, setMensagemSucesso] = useState("");
        const estadoInicialFornecedor = props.fornecedorParaEdicao;
        const [fornecedor, setFornecedor] = useState(estadoInicialFornecedor);
        const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setFornecedor({...fornecedor,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){
            const verificaID  = props.listaFornecedor.find((itemFornecedor) => itemFornecedor.id === fornecedor.id);
            if(!props.modoEdicao){
                if(verificaID){

                }else{
                    props.setListaFornecedor([...props.listaFornecedor,fornecedor]);
                }
            }
            else{

                props.setListaFornecedor([...props.listaFornecedor.filter((itemFornecedor)=>itemFornecedor.id !== fornecedor.id), fornecedor]);
                props.setModoEdicao(false);
                props.setFornecedorParaEdicao(fornecedorVazio);                
            }
            setFornecedor(fornecedorVazio);
            setFormValidado(false);
            if(props.modoEdicao === false){
                if(verificaID){
                    setMensagemSucesso("Fornecedor já cadastrado!");
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
                                label="CPF/CNPJ:"
                                className="mb-3"
                            >

                                <Form.Control 
                                    type="text" 
                                    placeholder="..." 
                                    id="id" 
                                    name="id" 
                                    value={fornecedor.id}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o CPNJ/CPF do fornecedor!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Nome da Empresa:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nome da Empresa" 
                                    id="nomeEmpresa" 
                                    name="nomeEmpresa" 
                                    value={fornecedor.nomeEmpresa}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome da Empresa!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        <Form.Group>
                            <FloatingLabel
                                label="Telefone:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="..." 
                                    id="telefone" 
                                    name="telefone" 
                                    onChange={manipularMudancas}
                                    value={fornecedor.telefone}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Telefone!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                            <FloatingLabel
                                label="Endereço:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Bandai" 
                                    id="endereco" 
                                    name="endereco" 
                                    onChange={manipularMudancas}
                                    value={fornecedor.endereco}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o Endereço!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Form.Group>
                            <FloatingLabel
                                label="E-mail:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="..." 
                                    id="email" 
                                    name="email" 
                                    onChange={manipularMudancas}
                                    value={fornecedor.email}
                                    required
                                    />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o E-mail do fornecedor!</Form.Control.Feedback>
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