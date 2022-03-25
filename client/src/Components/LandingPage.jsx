import React from 'react'
import { Link } from "react-router-dom";
import { Button, Container, Container_Left, Container_Rigth } from '../Style/LandingPage-styled';

export default function LandingPage() {
    return (
        <Container>
            <Container_Left>
                <h4>Fullstack project</h4>
                <h1>Henry Food</h1>
                <p>It's a page SPA (Single Page Application) <br />with React, Redux, Node y Sequelize.</p>
                <Link to='/home'>
                    <Button>Ingresar al sitio</Button>
                </Link>
            </Container_Left>
            <Container_Rigth>
                <img alt='Imagen lading page' src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            </Container_Rigth>
        </Container>
    )
}