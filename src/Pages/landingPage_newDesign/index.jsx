import React, { useState } from "react";
import styled from "styled-components";
import { LogoWithTextHorizontal } from "../../Components/Logos/LogoWithTextHorizontal";
import { Input } from "./LocalComponents/Input";

import QrScanner from "../qr_components/QrScanner";

const ProductPage = ({ productInfo }) => {
    return (
        <div>
            {Object.values(productInfo).map(info => {
                return <h1>{info}</h1>;
            })}
        </div>
    );
};

// ----------------------------------   Styles are here temporarily. I'm too lazy to switch tabs -----------------------------------------------

const Body = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 0;
    padding-top: 72px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    border: 1px solid black;
    overflow: scroll;
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
    const [productInfo, setProductInfo] = useState();
    const [productId, setProductId] = useState("");

    const onProductIdChange = event => {
        setProductId(event.target.value);
    };
    const onProductIdSubmit = event => {
        event.preventDefault();

        // talk to server
        fetch(
            `http://ec2-18-224-170-67.us-east-2.compute.amazonaws.com:3010/api/clientData?ID=${encodeURIComponent(
                productId
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
                        setProductInfo(json);
                        console.log(json);
                    });
                }
            })
            .catch(error => alert("Product Not Found"));
        console.log(productInfo);

        setProductId("");
    };

    return (
        <>
            <Header>
                <LogoWithTextHorizontal
                    height="42px"
                    width="42px"
                    onClick={() => setProductInfo()}
                />
            </Header>
            <Body>
                {productInfo ? (
                    <ProductPage productInfo={productInfo} />
                ) : (
                    <>
                        <QrWrapper>
                            <QrScanner />
                        </QrWrapper>
                        <Input
                            value={productId}
                            onChange={onProductIdChange}
                            onSubmit={onProductIdSubmit}
                        />
                    </>
                )}
            </Body>
        </>
    );
};

export default LandingPage;
