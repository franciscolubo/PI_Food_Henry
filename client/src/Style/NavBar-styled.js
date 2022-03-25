import styled from 'styled-components'

const first_color = "#dc8900";
const first_color_alt = "#FACD84";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    background: ${first_color};
    padding: 20px 0;
    padding-left: 20px;

    @media screen and (min-width: 600px){
        padding-left: 40px;
    }
`;

export const Container_SearchBar = styled.div`
    flex: .7;
    input{
        height: 30px;
        border: 2px solid #000;
        border-radius: 10px;
        background: ${first_color_alt};
        padding-left: 5px;
    }

    button{
        border: none;
        border-radius: 10px;
        background: ${first_color_alt};
        margin-left: 20px;
        width: 30px;
        height: 30px;
        padding: 3px;
        transition: 300ms;
        cursor: pointer;
    }

    button:hover{
        background: #e16738;
    }

    @media screen and (min-width: 600px){
        input{
            width: 70%;
            font-size: 25px;
            border-radius: 15px;
            padding-left: 10px;
        }

        button{
            width: 60px;
            margin-left: 30px;
        }
    }

    @media screen and (min-width: 1200px){
        input{
            font-size: 30px;
        }

        button{
            width: 80px;
        }
    }
`;

export const Buttons_Div = styled.div`
    flex: .3;
    display: flex;
    flex-direction: row;
`;

export const Buttons = styled.button`
    width: 30px;
    height: 30px;

    border: none;
    border-radius: 10px;
    background: ${first_color_alt};
    margin-left: 16px;
    padding-top: 3px;
    transition: 300ms;
    cursor: pointer;

    &:hover{
        background: #e16738;
    }

    @media screen and (min-width: 600px){
        width: 90px;
        margin: 0 20px;
    }
        
    @media screen and (min-width: 1200px){
        margin: 0 40px;
        width: 110px;
    }
`;
