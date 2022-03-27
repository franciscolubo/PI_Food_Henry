import styled from 'styled-components'

const first_color = "#dc8900";
const first_color_alt = "#FACD84";

export const CONTAINER = styled.div`
    display: flex;
    flex-direction: column-reverse;
    background: ${first_color};
    color: white;
    height: 100vh;

    @media screen and (min-width: 920px){
        flex-direction: row;
    }
`;

export const CONTAINER_LEFT = styled.div`
    flex: .4;
    padding: 50px 20px;

    h4{
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
        font-size: 13px;
    }

    h1{
        font-size: 50px;
        letter-spacing: 1.5px;
        font-weight: 600;
    }

    p{
        margin-bottom: 15px;
    }

    @media screen and (min-width: 600px){ 
        padding: 50px

    }

    @media screen and (min-width: 920px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        h4{
            font-size: 18px;
        }

        h1{
            font-size: 80px;
            line-height: 100px;
            margin-bottom: 15px
        }
    }

    @media screen and (min-width: 1200px){
        flex: .3;
    }
`;

export const CONTAINER_RIGHT = styled.div`
    flex: .6;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media screen and (min-width: 1200px){
        flex: .7;
    }
`;

export const BUTTON = styled.button`
    width: 100%;
    padding: 15px 0px;
    border: none;
    border-radius: 4px;
    font-size: 15px;
    letter-spacing: .8px;
    font-weight: 500;
    margin-top: 20px;
    transition: 300ms;
    cursor: pointer;
    
    &:hover{
        background: ${first_color_alt};
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
    
    @media screen and (min-width: 920px){
        max-width: fit-content;
        padding: 25px 30px
    }
`;
