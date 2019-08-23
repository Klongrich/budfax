import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

const StyledLogoWithTextHorizontal = styled.div`
    display: flex;
    align-items: flex-end;
    margin: 15px 0px 0px 15px;
`;
const LogoText = styled.h1`
    color: #43a13b;
    font-size: 42px;
    line-height: 32px;
    margin: 0px 0px 0px 5px;
`;

export const LogoWithTextHorizontal = ({ height, width }) => {
    return (
        <StyledLogoWithTextHorizontal>
            <Logo height={height} width={width} />
            <LogoText>BudFax</LogoText>
        </StyledLogoWithTextHorizontal>
    );
};
