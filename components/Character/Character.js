import {Button,Card,Row} from 'react-bootstrap'
const Character = ({id,name,image}) => {


  return (
    <Row key={id} >
       <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src= {image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </Row>
  )
}

export default Character