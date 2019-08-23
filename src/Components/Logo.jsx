import React from "react";
import styled from "styled-components";

import LogoImage from "../Images/Logo.png";

const LogoStyled = styled.img`
    height: ${height => height};
    width: ${width => width};
`;

export const Logo = ({ width, height }) => {
    return <LogoStyled width={width} height={height} src={LogoImage} />;
};
