import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data';

const FurnitureData = () => {
    let [furnitures] = useState(data);
    
    return (
        <Container>
            <Row className='productRow'>
            {furnitures.map(function(currentValue, index){
                return (
                    <Col xs={4} key={index} className='product'>
                    <img src={currentValue.url} alt='productImg'/>
                    <h4>{currentValue.title}</h4>
                    <p>{currentValue.content}</p>
                    <p style={{color: 'grey'}}>{currentValue.price}</p>
                </Col>
                )
            })}
            </Row>
        </Container>
    )
}

export default FurnitureData;