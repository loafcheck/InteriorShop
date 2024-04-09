import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import data from '../data';


const Detail = () => {

const [item, setItem] = useState(data);
const { id } =  useParams();
console.log(id);

    return (

        
            <div key={id} className='product'>
                    <img src={item[id].url} alt='productImg'/>
                    <h4>{item[id].title}</h4>
                    <p>{item[id].content}</p>
                    <p style={{color: 'grey'}}>{item[id].price}</p>
                </div>

    )
}

export default Detail;