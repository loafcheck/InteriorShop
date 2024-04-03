import React from 'react';
import Button from 'react-bootstrap/Button';
import interiorImg from '../interior.png';


const mainPg = ()=>{
    return (
        <>
        <Button variant="primary">Primary</Button>{' '}
        <Button variant="secondary">Secondary</Button>{' '}
        <Button variant="success">Success</Button>{' '}
        <Button variant="warning">Warning</Button>{' '}
        <Button variant="danger">Danger</Button>{' '}
        <Button variant="info">Info</Button>{' '}
        <Button variant="light">Light</Button>{' '}
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
      
        <div className='main-bg' style={{background:`url(${interiorImg})`}}></div>
        </>
      
    )
}

export default mainPg;