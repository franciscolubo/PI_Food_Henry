import React from 'react'
import { Link } from "react-router-dom";
import { BUTTON, CONTAINER, CONTAINER_LEFT, CONTAINER_RIGHT } from '../Style/LandingPage-styled';

export default function LandingPage() {
    return (
        <CONTAINER>
            <CONTAINER_LEFT>
                <h4>Fullstack project</h4>
                <h1>Henry Food</h1>
                <p>It's a page SPA (Single Page Application) <br />with React, Redux, Node y Sequelize.</p>
                <Link to='/home'>
                    <BUTTON>Ingresar al sitio</BUTTON>
                </Link>
            </CONTAINER_LEFT>
            <CONTAINER_RIGHT>
                <img alt='Imagen lading page' src='https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
            </CONTAINER_RIGHT>
        </CONTAINER>
    )
}