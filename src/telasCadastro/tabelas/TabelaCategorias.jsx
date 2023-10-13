import { Button, Container, Table } from "react-bootstrap";

export default function TabelaCategorias(props) {

    function excluirCategoria(categoria) {
        if (window.confirm('Deseja realmente excluir essa Categoria?')) {
            props.setListaCategoria(
                props.listaCategoria.filter((itemLista => itemLista.nome !== categoria.nome))
            );
        }
    }

    function editarCategoria(categoria){

        props.setCategoriaParaEdicao(categoria);
        props.setModoEdicao(true);
        props.exibirFormulario(true);
    }


    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Nova Categoria</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaCategoria.map((categoria) => (
                        <tr key={categoria.nome}>
                            <td>{categoria.nome}</td>
                            <td>{categoria.descricao}</td>
                            <td>
                            <Button variant="danger" onClick={() => {
                                    excluirCategoria(categoria);
                                }}>
                                Excluir
                                </Button>
                                <Button onClick={() => {
                                    editarCategoria(categoria);
                                }} variant="warning">
                                 Editar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}