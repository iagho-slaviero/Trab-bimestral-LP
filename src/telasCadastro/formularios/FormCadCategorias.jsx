import { useState } from "react";
import MensagemSucesso from "../components/MensagemSucesso";
import { Button, Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
export default function FormCadCategorias(props) {
    
    const categoriaVazio = {
            nome:'',
            descricao:''
        }
        const [exibirMensagem, setExibirMensagem] = useState(false);
        const [mensagemSucesso, setMensagemSucesso] = useState("");
        const estadoInicialCategoria = props.categoriaParaEdicao;
        const [categoria, setCategoria] = useState(estadoInicialCategoria);
        const [formValidado, setFormValidado] = useState(false);

    function manipularMudancas(e){
        const componente = e.currentTarget;
        console.log(componente.value)
        setCategoria({...categoria,[componente.name]:componente.value});
    }

    function manipularSubmissao(e){
        const form = e.currentTarget; 
        if (form.checkValidity()){

            if(!props.modoEdicao){
                props.setListaCategoria([...props.listaCategoria,categoria]);
            }
            else{

                props.setListaCategoria([...props.listaCategoria.filter((itemCategoria)=>itemCategoria.nome !== categoria.nome), categoria]);
                props.setModoEdicao(false);
                props.setCategoriaParaEdicao(categoriaVazio);                
            }
            setCategoria(categoriaVazio);
            setFormValidado(false);
            if(props.modoEdicao === false){
                setMensagemSucesso("Cadastro concluído com sucesso!");
                setExibirMensagem(true);
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
                                label="Nome:"
                                className="mb-3"
                            >

                                <Form.Control 
                                    type="text" 
                                    placeholder="..." 
                                    id="nome" 
                                    name="nome" 
                                    value={categoria.nome}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe o nome da categoria!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <FloatingLabel
                                label="Descrição:"
                                className="mb-3"
                            >
                                <Form.Control 
                                    type="text" 
                                    placeholder="Informe o nome do produto" 
                                    id="descricao" 
                                    name="descricao" 
                                    value={categoria.descricao}
                                    onChange={manipularMudancas}
                                    required />
                            </FloatingLabel>
                            <Form.Control.Feedback type="invalid">Informe a descrição da categoria!</Form.Control.Feedback>
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