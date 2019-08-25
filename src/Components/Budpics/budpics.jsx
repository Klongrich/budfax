import React from "react";
import styled from "styled-components";

import testImage from "../../Images/BudFax_Primary_Dark.png";


const SetImageSize = styled.img`
    height: ${({ height }) => height};
    width: ${({ width }) => width};
`;

export const DankBudPic = ({ width, height, file_path}) => {
    return <SetImageSize width={width} height={height} src={file_path} />;
};
