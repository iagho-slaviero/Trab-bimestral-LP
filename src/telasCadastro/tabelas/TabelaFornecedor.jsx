import { Button, Container, Table } from "react-bootstrap";

export default function TabelaFornecedores(props) {

    function excluirFornecedor(fornecedor) {
        if (window.confirm('Deseja realmente excluir esse fornecedor?')) {
            props.setListaFornecedor(
                props.listaFornecedor.filter((itemLista => itemLista.id !== fornecedor.id))
            );
        }
    }

    function editarFornecedor(fornecedor){

        props.setFornecedorParaEdicao(fornecedor);
        props.setModoEdicao(true);
        props.exibirFormulario(true);

    }

    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Fornecedor</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CNPJ/CPF</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaFornecedor.map((fornecedor) => (
                        <tr key={fornecedor.id}>
                            <td>{fornecedor.id}</td>
                            <td>{fornecedor.nomeEmpresa}</td>
                            <td>{fornecedor.telefone}</td>
                            <td>{fornecedor.endereco}</td>
                            <td>{fornecedor.email}</td>
                            <td>
                            <Button variant="danger" onClick={() => {
                                    excluirFornecedor(fornecedor);
                                }}>
                                Excluir
                                </Button>
                                <Button onClick={() => {
                                    editarFornecedor(fornecedor);
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