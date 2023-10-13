import { Button, Container, Table } from "react-bootstrap";

export default function TabelaClientes(props) {

    function excluirCliente(cliente) {
        if (window.confirm('Deseja realmente excluir esse cliente?')) {
            props.setListaClientes(
                props.listaClientes.filter((itemLista => itemLista.cpf !== cliente.cpf))
            );
        }
    }

    function editarCliente(cliente){
        props.setClienteParaEdicao(cliente);
        props.setModoEdicao(true);
        props.exibirFormulario(true);

    }

    return (
        <Container>
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Cliente</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Nome</th>
                        <th>Endereço/Nº</th>
                        <th>Cidade/UF</th>
                        <th>CEP</th>
                    </tr>
                </thead>
                <tbody>
                    {props.listaClientes.map((cliente) => (
                        <tr key={cliente.cpf}>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.endereco} / {cliente.numero}</td>
                            <td>{cliente.cidade} / {cliente.uf}</td>
                            <td>{cliente.cep}</td>
                            <td>
                                <Button variant="danger" onClick={() => {
                                    excluirCliente(cliente);
                                }}>
                                Excluir
                                </Button>
                                <Button onClick={() => {
                                    editarCliente(cliente);
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