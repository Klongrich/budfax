import styled from "styled-components";

export const Body = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 0;
    padding-top: 72px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    border: 1px solid black;
    overflow: scroll;
`;

export const Header = styled.div`
    z-index: 2;
    height: 72px;
    width: 100%;
    background-color: white;
   
    position: absolute;
`;
//  box-shadow: 0 0 0 #00b585;