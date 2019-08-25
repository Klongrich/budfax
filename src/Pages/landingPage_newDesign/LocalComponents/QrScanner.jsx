import React from "react";
import styled from "styled-components";

// https://www.npmjs.com/package/react-qr-reader | only works with localhost and https
import QrReader from "react-qr-reader";

const StyledQrReader = styled(QrReader)`
    width: 250px;
    height: 250px;
`;

const QrWrapper = styled.div`
    border-radius: 15px;
    width: 250px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    border: 1px solid black;
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
