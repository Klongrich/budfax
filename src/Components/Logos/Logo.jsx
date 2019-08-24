import React from "react";
import styled from "styled-components";

import LogoImage from "../../Images/BudFax_Primary_Dark.png";

const LogoStyled = styled.img`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
`;

export const Logo = ({ width, height }) => {
    return <LogoStyled width={width} height={height} src={LogoImage} />;
};
