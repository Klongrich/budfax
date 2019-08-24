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

class QrScanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uniqueID: "",
            productName: "",
            companyName: "",
            email: "",
            haverstDate: "",
            strand: "",
            numberOfUnits: "",
            thc: "",
            thca: "",
            cbd: "",
            pictureName: ""
        };
        this.baseState = this.state;
        this.handleScan = this.handleScan.bind(this);
    }

    handleScan = data => {
        if (data) {
            this.setState({
                uniqueID: data
            });
        }
        console.log(data);

        if (this.state.uniqueID.length > 0) {
            fetch(
                `http://ec2-18-224-170-67.us-east-2.compute.amazonaws.com:3010/api/clientData?ID=${encodeURIComponent(
                    this.state.uniqueID
                )}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    }
                }
            )
                .then(response => {
                    if (response.ok) {
                        response.json().then(json => {
                            this.setState(json);
                        });
                    }
                })
                .catch(error => console.log("Product Not Found"));
            console.log(this.state);
            console.log("DATABASE CALL");
            this.resetState();
        }
    };

    resetState = () => {
        this.setState(this.baseState);
    };

    handleError = err => {
        console.log(err);
    };

    render() {
        const previewStyle = {
            // instead of styling like this, check out line 7. I can fuck with the styles later if you dont want to
            width: 250,
            height: 250
        };
        return (
            <QrWrapper>
                <StyledQrReader
                    className="qr-reader"
                    delay={500} // 5 seconds
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
            </QrWrapper>
        );
    }
}

export default QrScanner;