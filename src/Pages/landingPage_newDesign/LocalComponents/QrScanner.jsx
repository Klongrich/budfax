import React from "react";
import styled from "styled-components";

// https://www.npmjs.com/package/react-qr-reader | only works with localhost and https
import QrReader from "react-qr-reader";

const StyledQrReader = styled(QrReader)`
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

const QrWrapper = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
`;

export const QrScanner = ({delay, onError, onScan}) => {
    return (
        <QrWrapper>
            <StyledQrReader
                delay={delay} // 5 seconds
                onError={onError}
                onScan={onScan}
            />
        </QrWrapper>
    );
}
export default QrScanner;