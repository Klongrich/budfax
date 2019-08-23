import React from "react";
import styled from "styled-components";
import { LogoWithTextHorizontal } from "../../Components/Logos/LogoWithTextHorizontal";

const Body = styled.div`
    height: 100%;
    width: 100%;
    background-color: slategray;
    top: 72px;
    position: absolute;
`;

const Header = styled.div`
    height: 72px;
    width: 100%;
    background-color: black;
    position: fixed;
`;

const LandingPage = () => {
    return (
        <>
            <Header>
                <LogoWithTextHorizontal height="42px" width="42px" />
            </Header>
            <Body>WEEEED</Body>
        </>
    );
};

export default LandingPage;
