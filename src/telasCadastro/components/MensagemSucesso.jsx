import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function MensagemSucesso(props) {
  const [show, setShow] = useState(true);

  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      {props.mensagem}
    </Alert>
  );
}