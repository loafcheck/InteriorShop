import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const FurnitureItems = (props) => {  
console.log(props);
return (
 
    <Container>
    <Row className='productRow'>
    {props.items.map((currentValue, index) => (
        <Col xs={4} key={index} className='products'>
            <img src={currentValue.url} alt='productImg'/>
            <h4>{currentValue.title}</h4>
            <p>{currentValue.content}</p>
            <p style={{color: 'grey'}}>{currentValue.price}</p>
        </Col>
    ))}
     
    </Row> 
</Container>

)

    
}

export default FurnitureItems;