import styled from "styled-components";

const first_color = "#dc8900";
const first_color_alt = "#FACD84";

export const CONTAINER_CREAT_AND_PREV = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 900px){
        flex-direction: row;
        height: auto;
    }

`;

export const CONTAINER_CREATE = styled.div`
    background: #3e3b42;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 5px;
    border: 1px solid;
    border-radius: 10px;

    @media screen and (min-width: 900px){
        flex: .50;
    }

`;

export const CONTAINER_PREVIEW = styled.div`
    background: #3e3b42;
    margin: 5px;
    border: 1px solid;
    border-radius: 10px;
    padding-bottom: 15px;

    @media screen and (min-width: 900px){
        flex: .50;
    }
`;

export const FORM_CREATE = styled.form`
    h2{
        font-weight: 600;
        letter-spacing: 1px;
        border-bottom: 1px solid;
        margin: 20px auto;
        text-align: center;
    }
    
    button{
        width: 50%;
        background: transparent;
        border:none;
        font-weight: 600;
        letter-spacing: 1px;
        color: ${first_color_alt};
        margin: 20px auto;
    }

    div{
        display: flex;
        flex-wrap: wrap;

        label{
            width: 100%;
            margin-bottom: 10px;
            margin-left: 5px;
            font-weight: 500;
            letter-spacing: 0.5px;
            color: white;

            input{
                width: 60%;
                float: right;
                margin-right: 10px;
                background: #292929;
                border: 1px solid black;
                border-radius: 10px;
                padding-left: 5px;
                color: white;
                cursor: pointer;
            }

            select {
                width: 60%;
                float: right;
                margin-right: 10px;
                background: #292929;
                border: 1px solid black;
                border-radius: 10px;
                padding-left: 5px;
                color: white;
                cursor: pointer;
            }
        }

        button{
        width: 40%;
        background: ${first_color};
        border:none;
        font-weight: 600;
        letter-spacing: 1px;
        margin: 20px auto;
        height: 30px;
        border-radius: 10px;
        transition: 300ms;
        color:black;
        }

    }

    button:hover{
        background: ${first_color_alt};
    }


    @media screen and (min-width: 600px){
        h2{
            text-align: center;
        }
    }

    @media screen and (min-width: 900px){
        div{
            margin-bottom: 100px;
        }
    }

`;


export const PREVIEW = styled.div`
    text-align: center;
    margin: auto;
    clear: both;

    h2{
        font-weight: 600;
        letter-spacing: 1px;
        border-bottom: 1px solid;
        margin: 20px auto;
        width: 100%;
    }

    img{
        width: 80%;
        border: 1px solid;
        border-radius: 5px;
        margin: auto;
    }

    p{
        color: white;
        word-wrap: break-word;

        button{
            background: white;
            border: 1px solid red;
            border-radius: 10px;
            width: 15px;
        }

        button:hover{
            background: red;
        }
    }

    h4{
        font-weight: 500;
        border-bottom: 1px solid;
        width: 40%;
        margin: 10px auto;
    }

    @media screen and (min-width: 600px){
        h2{
            text-align: center;
            width: 100%;
        }
    }
`;



export const BUTTON_HOME = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;

    button{
        width: 100%;
        background: ${first_color_alt};
        border: none;
    }

    button:hover{
        background: #f2d9b1;
    }
`;