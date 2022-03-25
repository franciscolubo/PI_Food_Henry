import styled from "styled-components";


export const Container_Details = styled.div`
    background: #3e3b42;
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 3px solid;
    border-radius: 20px;
    width: 95%;
    margin: 10px auto;

    div{
        img{
            width: 90%;
            margin-top: 5px auto;
            border: 1px double;
            border-radius: 10px;
        }

        h2{
            font-weight: 600;
            letter-spacing: 0.8px;
        }

        h4{
            font-weight: 500;
            letter-spacing: 0.5px;
            border-bottom: 2px solid black;
            width: 15%;
            margin: auto;
        }

        p{
            font-weight: 300;
            left: 1px;
            word-wrap: break-word;
            width: 80%;
            margin: auto;
            color: #e1c78a;
        }

        span{
            border-bottom: 2px solid #e16738;
            font-weight: 500;
            color: #e16738;
        }

    }

    button{
        width: 80%;
        height: 30px;
        background: #a99154;
        border: none;
        margin: 10px auto;
    }

    button:hover{
        background: #b5a57b;
    }

    @media screen and (min-width: 900px){
        div{
            img{
                margin-top: 15px;
                width: 80%;
            }
        }
    }

    @media screen and (min-width: 1200px){
        div{
            img{
                width: 70%;
            }
        }
    }

    h3{
        font-weight: 700;
        letter-spacing: 1.5px;
        font-size: 30px;
    }
`;