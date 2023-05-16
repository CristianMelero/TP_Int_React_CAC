import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.foto} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
        <Card.Text>
        {props.descripcion}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;