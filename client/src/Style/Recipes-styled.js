import styled from "styled-components";

const first_color_alt = "#816a14";

export const CONTAINER_RECIPES = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 320px;
    margin: auto;

    @media screen and (min-width: 600px) {
        width: 600px;
    }

    @media screen and (min-width: 900px) {
        width: 900px;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
`;

export const SHOW_RECIPE = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    text-align: center;
    border: 2px solid;
    border-radius: 10px;
    margin-bottom: 10px;
    
    img{
        width: 95%;
        margin: 5px;
        border: 2px solid;
    }

    div{
        h2{
            font-weight: 600;
            border-bottom: 1px solid;
            margin: auto 10px;
        }
        h5 {
            font-weight: 500;
            font-size: 18px;
        }
        p{
            color: ${first_color_alt};
            margin-bottom: 7px;
        }
    }

    a{
        margin-top: auto;
        button{
            background: transparent;
            margin-bottom: 20px;
            padding: 5px;
            border: none;
            border-radius: 5px;
            transition: 300ms;
            font-size: 18px;
            color: white;
        }

        button:hover{
            background: #e16738;
            color: black;
        }
    }

    @media screen and (min-width: 600px) {
        width: 290px;
        margin: 5px;
    }

    @media screen and (min-width: 1200px) {
        width: 360px;
        margin: 20px;
    }
`;