import React from "react";
import styled from "styled-components";
import { LogoWithTextHorizontal } from "../../Components/Logos/LogoWithTextHorizontal";
import { Input } from "./LocalComponents/Input";

import QrScanner from "../qr_components/QrScanner";

// ----------------------------------   Styles are here temporarily. I'm too lazy to switch tabs -----------------------------------------------

const Body = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
`;

const Header = styled.div`
    z-index: 2;
    height: 72px;
    width: 100%;
    background-color: white;
    box-shadow: 0 0 0 #00b585;
    position: absolute;
`;

const QrWrapper = styled.div`
    background-color: #1de8b5;
    border-radius: 15px;
    height: 250px;
    width: 250px;
    margin-top: 75px;
    color: white;
    font-size: 100px;
    position: relative;
    /* placeholder */
    display: flex;
    justify-content: center;
`;

const LandingPage = () => {
    return (
        <>
            <Header>
                <LogoWithTextHorizontal height="42px" width="42px" />
            </Header>
            <Body>
                <QrWrapper>
                    <QrScanner/>
                </QrWrapper>
                <Input/>
            </Body>
        </>
    );
};

export default LandingPage;
