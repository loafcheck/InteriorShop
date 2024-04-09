import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

const Item = (props) => {  
    let { id } = useParams();
    console.log(`I am id: ${id}`)
   
    let foundItem = props.items.find(function ( element) {
        return element.id == id;
    });
    console.log(foundItem);



return (
    <Container>
        <Row>
            <Col key={id} className='product'>
                <img src={foundItem.url} alt='productImg'/>
                <h4>{foundItem.title}</h4>
                <p>{foundItem.content}</p>
                <p style={{color: 'grey'}}>{foundItem.price}</p>
            </Col>
        </Row> 
    </Container> 

)

    
}

export default Item;