import styled from "styled-components";

const first_color = "#dc8900";
const first_color_alt = "#FACD84";

export const CONTAINER = styled.div`
    width: 95%;
    margin: 20px auto;
    background: #3e3b42;
    border: 2px solid;
    border-radius: 10px;
    padding: 10px;
    height: auto;

    h1{
        text-align: center;
        font-weight: 600;
        letter-spacing: 1px;
        margin-bottom: 20px;
        border-bottom: 1px solid;
    }

    h2{
        text-align: center;
        font-weight: 500;
        letter-spacing: 1px;
        margin: 20px auto;
        border-bottom: 1px solid;
    }

    li{
        list-style: none;
        
        button{
            margin-right: 5px;
            width: 20px;
            border: 1px solid red;
            border-radius: 7px;
        }

        button:hover{
            background: red;
        }
    }

    ul{
        text-align: center;

    }
`;

export const EDIT_CONTAINER = styled.div`
    text-align: left;
    label{
        font-weight: 400;
        margin-left: 5px;
        color: white;
    }

    input{
        float: right;
        background: #292929;
        border: 1px solid black;
        border-radius: 5px;
        padding-left: 5px;
        color: white;
        width: 50%;
        cursor: pointer;
    }

    select {
        float: right;
        background: #292929;
        border: 1px solid black;
        border-radius: 10px;
        padding-left: 5px;
        color: white;
        cursor: pointer;
        width: 50%;
    }

    button{
        width: 30%;
        border: 1px solid;
        background: ${first_color};
        font-weight: 400;
        cursor:pointer;
    }

    button:hover{
        background: ${first_color_alt};
        color: white;
    }

    div{
        div{
            text-align: center;
            button{
                width: 50%;
                margin: 20px; 
                border: 1px solid;
                background: ${first_color};
                font-weight: 400;
                cursor:pointer;
            }

            button:hover{
                background: ${first_color_alt};
                color:white;
            }
        }
    }

    @media screen and (min-width: 900px){
        label{
            font-size: 18px;
            margin-left: 10px;
        }

        input{
            width: 65%;
            margin-right: 10px;
        }

        select{
            width: 65%;
            margin-right: 10px;
        }
    }

`;

export const BUTTON = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;
    
    a{
        button{
            width: 90%;
            background: ${first_color_alt};
            border: none;
        }
    }
`;