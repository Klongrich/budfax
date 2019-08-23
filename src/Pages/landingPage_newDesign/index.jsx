import React from "react";
import styled from "styled-components";
import { Logo } from "../../Components/Logo";

const Body = styled.div`
    height: 100px;
    width: 100px;
    background-color: green !important;
`;

const LandingPage = () => {
    return (
        <Body>
            <Logo height="42px" width="42px" />
        </Body>
    );
};

export default LandingPage;
