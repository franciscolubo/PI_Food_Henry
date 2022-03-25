import styled from "styled-components";

const first_color = "#dc8900";
const first_color_alt = "#FACD84";

export const Container_General = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
`;

export const Container = styled.div`
    flex: auto;
    text-align: center;
    margin: 10px 0;

    p{
        font-weight: 400;
        letter-spacing: .7px;
        color: ${first_color_alt};
    }

    select{
        border: none;
        border-radius: 10px;
        background: #292929;
        color: #fff;
        width: 70%;
        padding: 0 15px;
        cursor: pointer;
    }

    select:hover{
        background: #222222;
    }

    select:focus{
        border-radius: 10px 10px 0px 0px;
    }

    
    @media screen and (min-width: 600px){
        p{
            font-size: 18px;
            letter-spacing: 1px;
        }

        select {
            border-bottom: 2px double;
        }
    }
`;