import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';


const FurnitureData = (props) => {
let {id} = useParams();
console.log(id);
console.log(props.furnitures[id].url);

    return (

        <Container>
           <Row className='productRow'>
                    <Col xs={4} key={0} className='product'>
                    <img src={props.furnitures[id].url} alt='productImg'/>
                    <h4>{props.furnitures[id].title}</h4>
                    <p>{props.furnitures[id].content}</p>
                    <p style={{color: 'grey'}}>{props.furnitures[id].price}</p>
                </Col>
            </Row>
        

            {/* <Row className='productRow'>
            {props.furnitures.map(function(currentValue, index){
                return (
                    <Col xs={4} key={index} className='product'>
                    <img src={currentValue.url} alt='productImg'/>
                    <h4>{currentValue.title}</h4>
                    <p>{currentValue.content}</p>
                    <p style={{color: 'grey'}}>{currentValue.price}</p>
                </Col>
                )
            })}
            </Row> */}
        </Container>
    )
}

export default FurnitureData;