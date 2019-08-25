import React, { useState } from "react";
import styled from "styled-components";
import { LogoWithTextHorizontal } from "../../Components/Logos/LogoWithTextHorizontal";
import { Input } from "./LocalComponents/Input";
import { Body, Header, DebugBox } from "../UniversalStyles/Theme";
import QrScanner from "./LocalComponents/QrScanner";
import ProductPage from "../ProductPage";
import CompanyInfoPage from "../CompanyInfoPage/companyinfo";
import ProductNotFound from "../ProductNotFoundPage";


const LandingPage = () => {
    const [productInfo, setProductInfo] = useState(); // look into react hooks if you want to better understand this black magic wizardry
    const [productId, setProductId] = useState("");
    const [isFound, setIsFound] = useState("");


    const getData = () => {
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
                        setIsFound(true)
                        console.log(json);
                    });
                }
            })
            .catch(error => setIsFound(false));
        console.log(productInfo);
        setProductId("");
    }

    const onProductIdChange = event => {
        setProductId(event.target.value);
    };

    const onProductIdSubmit = event => {
        event.preventDefault();
        getData();
    };

    const onQrScannerScan = data => {
        setProductId(data);
        console.log(productId);

        if (productId != null && productId.length != 0){
             getData();
        }
    };

    const handleError = err => {
        console.log(err);

    };

    return (
        <div>
            <Header>
                <LogoWithTextHorizontal
                    height="42px"
                    width="42px"
                    onClick={() => setProductInfo()} // Clears product info state so that it can redirect. check out this component
                />
            </Header>
            <Body>
                { isFound ? (
                            {productInfo ? (
                                 <ProductPage productInfo={productInfo} />
                            ) : (
                                <div>  
                                    <h5> Scan Code Here </h5>
                                    <QrScanner
                                        delay={1000}
                                        onError={handleError}
                                        onScan={onQrScannerScan}
                                    />
                                    <Input // Passes onChange and onSubmit logic down to input component. Need to do the same thing for the QR Component, instead of uniqueId probably use product id
                                        value={productId}
                                        onChange={onProductIdChange}
                                        onSubmit={onProductIdSubmit}
                                    />
                                    <CompanyInfoPage />
                                </div>  
                            )}
                        ) : (
                            <ProductNotFound/>
                    )}
            </Body>
        </div>
    );
};

export default LandingPage;
