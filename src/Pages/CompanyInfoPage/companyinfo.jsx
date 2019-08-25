import React from "react";
import styled from "styled-components";
import checkImage from "./checkmark.png"
import DataImage from "./superawesome.png"


const Container = styled.div`

    margin: 0;
    height: 1200px;
    width: 100%;
    text-align:center;
    margin-top:80px;
    background-color: green;
`;

const Descript = styled.div`
    margin:0;
    background-color:white;
    height:400px;
    width: 50%;
    margin-left:25px;
    float: left;
`;

const CheckMarkImage = styled.div`
    margin:0;
`;

const LineBreak = styled.div`

    height: 15px;
    margin-top:50px;
    width: 100%;

`;

const DataImageBox = styled.div`
    margin:0;
    margin-top: 100px;
    margin-left: 25px;
    float: left;
`;


const Descript2causeidkhowtopassparameters = styled.div`
    margin:0;
    margin-top: 100px;
    height:400px;
    width: 50%;
    margin-left:610px;
    font-size: 20px;
    padding-top: 10px;
`;

const SignUP = styled.div`
    margin:0;
    background-color: black;
    height:150px;
    width:100%;
    color:white;
    
`;

const CompanyInfo = () => {
    
    return(

        <Container>
             <h1>Company Info</h1>
            <Descript>
                <h2> Customer testamonials </h2>

                    <h3>Jacquoes Holmes</h3>
                <p> "Fuck da boof niggy. we be straight blowing load pack up here.
                    BudFaxs all day baby. What it do. Bang Bang skeet skeet niggs. 
                    Get yo fentaly laced as shit outta here cuz. Your shit been sprayed
                    with windex cuz. If it aint budfax fuck dat shit." - A Homie 
                </p>

                        <h3>Marquis Sr the Thrid</h3>
                <p>
                    "I remeber when I use to smoke grass out a bag niggy. One time my ass got
                    sold oregeno and I smoked that shit. Another time I had PCP up in that bitch.
                    I don't touch it if it's not budfaxs" 
                </p>

                <strong><p>But okay in reality I'm thinking of what to put here so I'm just setting the layout up</p></strong>
            </Descript>

            <CheckMarkImage>
                <img height="380px" width="380px" src={checkImage} />
                <p>Put our verify Image</p>
            </CheckMarkImage>

            <LineBreak>
                <h1>How We Do It</h1>
            </LineBreak>

            <DataImageBox>
                <img height="350px" width="500px" src={DataImage} />
            </DataImageBox>

            <Descript2causeidkhowtopassparameters>
               <p>  
                   Here at budfaxs we use very complacatied algorthims and encryptions
                    to ensure your data is sercured to the highest degree. Our custom sudo-random SHA256 
                    hash generator gives each product a unique ID that ties back to the contents of the 
                    product. This ensuring each product shall never be conterfited again allowing you
                    to establish the upmost trust between your brand and your users.
               </p>

               <strong><p>Yeah Don't know what I'll put here but it'll explain how the software works</p></strong>
            </Descript2causeidkhowtopassparameters>

            <SignUP>
                <h1>Sign Up</h1>
                <p>Put button here that leads to like grower sign up forum?</p>
            </SignUP>


        </Container>

    )
}

export default CompanyInfo;