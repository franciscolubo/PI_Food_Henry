import styled from "styled-components";

const first_color = "#dc8900";
const first_color_alt = "#FACD84";

export const Containter_Pagination = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Pagination_List = styled.li`
    list-style: none;
    margin: auto;

    button{
        width: 30px;
        margin: 10px;
        background: transparent;
        border: 1px solid black;
    }

    button:hover{
        background: ${first_color_alt};
    }

`;