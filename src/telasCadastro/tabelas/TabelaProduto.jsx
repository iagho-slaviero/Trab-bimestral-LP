import { Button, Container, Table } from "react-bootstrap";

export default function TabelaProdutos(props) {

    function excluirProduto(produto) {
        if (window.confirm('Deseja realmente excluir esse produto?')) {
            props.setListaProduto(
                props.listaProduto.filter((itemLista => itemLista.id !== produto.id))
            );
        }
    }

    function editarProduto(produto){

        props.setProdutoParaEdicao(produto);
        props.setModoEdicao(true);
        props.exibirFormulario(true);
    }


    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Produto</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Fabricante</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaProduto.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td>{produto.fabricante}</td>
                            <td>{produto.categoria}</td>
                            <td>
                            <Button variant="danger" onClick={() => {
                                    excluirProduto(produto);
                                }}>
                                Excluir
                                </Button>
                                <Button onClick={() => {
                                    editarProduto(produto);
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