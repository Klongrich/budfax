import React from "react";
import styled from "styled-components";
import { LogoWithTextHorizontal } from "../../Components/Logos/LogoWithTextHorizontal";

const Body = styled.div`
    height: 100%;
    width: 100%;
    background-color: slategray;
    z-index: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Header = styled.div`
    z-index: 7;
    height: 72px;
    width: 100%;
    background-color: black;
    box-shadow: 0 0 8px black;
    position: fixed;
`;

const QrWrapper = styled.div`
    background-color: black;
    border-radius: 5px;
    height: 150px;
    width: 150px;
    margin-top: 100px;
`;

const Input = styled.input`
    height: 50px;
    width: 200px;
    margin-top: 100px;
    background-color: white;
`;

const LandingPage = () => {
    return (
        <>
            <Header>
                <LogoWithTextHorizontal height="42px" width="42px" />
            </Header>
            <Body>
                <QrWrapper /> {/* Put Logic Here*/}
                <Input />
            </Body>
        </>
    );
};

export default LandingPage;
