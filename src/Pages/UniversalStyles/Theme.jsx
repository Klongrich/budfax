import styled from "styled-components";

export const Body = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, rgb(2, 72, 2), rgb(84, 152, 0));
    z-index: 0;
    padding-top: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    border: 1px solid black;
    ;
`;

// overflow: scroll

export const Header = styled.div`
    z-index: 2;
    height: 72px;
    width: 100%;
    background-color: white;
    position: absolute;
`;

export const DebugBox = styled.div`
    border: 5px dotted red;
    height: 100%;
    width: 100%;    
`;
//  box-shadow: 0 0 0 #00b585;