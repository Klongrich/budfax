import React from "react";
import styled from "styled-components";
import { LogoWithTextHorizontal } from "../../Components/Logos/LogoWithTextHorizontal";
import { Search } from "styled-icons/octicons/Search";

// Styles are here temporarily. I'm too lazy to switch tabs

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
    z-index: 7;
    height: 72px;
    width: 100%;
    background-color: white;
    box-shadow: 0 0 8px black;
    position: absolute;
`;

const QrWrapper = styled.div`
    background-color: black;
    border-radius: 5px;
    height: 200px;
    width: 200px;
    margin-top: 75px;
    color: white;
    font-size: 100px;
    position: relative;
    /* placeholder */
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    position: relative;
    padding: 15px 40px 15px 20px;
    width: 20px;
    color: #525252;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 100;
    letter-spacing: 2px;
    border: 1px solid #43a13b;
    border-radius: 5px;
    transition: width 0.4s ease;
    outline: none;

    &:focus {
        width: 200px;
    }
`;

const InputWrapper = styled.div`
    position: relative;
    margin-top: 75px;
    height: 84px;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
`;

const CrazyShit = styled(Search)`
    position: relative;
    color: black;
    left: -35px;
    color: #43a13b;
    height: 25px;
`;

const LandingPage = () => {
    return (
        <>
            <Header>
                <LogoWithTextHorizontal height="42px" width="42px" />
            </Header>
            <Body>
                <QrWrapper>QR{/* Logic goes here*/}</QrWrapper>
                <InputWrapper>
                    <Input placeholder="Product Id #" />
                    <CrazyShit />
                </InputWrapper>
            </Body>
        </>
    );
};

export default LandingPage;
