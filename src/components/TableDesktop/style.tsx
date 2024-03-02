import styled from "styled-components";

export const Container = styled.section`
    border-radius: 8px 8px 0 0; 
    width: 100%;
    margin-top: 32px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    height: 100%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 10px; 
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.purple50}; 
        border-radius: 2px;
    }

    table{
        width: 100%;
        border-collapse: separate; 
        border-spacing: 0 2px;
    }

    
    thead {
      th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: ${props => props.theme.colors.purple};
        color: ${props => props.theme.colors.white};
      }
    }


    th{
        padding: 16px 32px;
        font-size: 16px;
        font-weight: 600;
        text-align: left;
        vertical-align: middle;
        color: ${props => props.theme.colors.white};
    }

    td{
        max-width: 500px;
        padding: 16px 32px;
        font-size: 16px;
        font-weight: 400;
        vertical-align: middle;
        background-color: ${props => props.theme.colors.white};
        border-top: 1px solid ${props => props.theme.colors.purple30};
        border-collapse: collapse;
    }

    @media screen and (max-width: 1200px) {
      td,th {
        padding: 16px 16px;
      }
    }
 
    @media screen and (max-width: 900px) {
        margin-top: 0px;
        display: none;
    }
`

export const Icon = styled.img`
    width: 24px;
    height: auto;
    cursor: pointer;
`