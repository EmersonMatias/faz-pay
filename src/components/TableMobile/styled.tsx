import styled from "styled-components";

export const Container = styled.section`
    overflow: hidden;
    border-radius: 8px 8px 0 0; 
    width: 100%;
    height: 100%;
    margin-top: 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    overflow-y: scroll;

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
        padding: 0 14.5px;
        text-align: center;
        height: 47px;
        font-size: 16px;
        font-weight: 500;
        vertical-align: middle;
        background: linear-gradient(180deg, #5A84C0, #594ED2);
        color: ${props => props.theme.colors.white};
    }

    .details-container{
        padding-top: 32px;
        padding-bottom: 32px;
    }

    td{
        padding: 0px 16px;
        text-align: center;
        height: 49px;
        font-size: 16px;
        font-weight: 400;
        vertical-align: middle;
        background-color: ${props => props.theme.colors.white};

         img{
            width: 34px;
            height: 34px;
            border-radius: 100%;
        }

        
    }
 
    .details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px dashed ${props => props.theme.colors.gray10};
        margin-top: 16px;

        h2{
            font-weight: 700;
            margin-right: 16px;
        }
    }


    @media screen and (min-width: 900px){
       display: none;
    }
`