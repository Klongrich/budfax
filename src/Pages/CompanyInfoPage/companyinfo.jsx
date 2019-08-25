import React from "react";
import styled from "styled-components";


const Container = styled.div`

    margin: 0;
    height: 1500px;
    width: 100%;
    text-align:center;
    margin-top:80px;
    background-color: green;
`;

const CompanyInfo = () => {
    
    return(

        <Container>
            <p>Company Info</p>
        </Container>

    )
}

export default CompanyInfo;