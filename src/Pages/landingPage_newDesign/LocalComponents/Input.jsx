import React from "react";
import styled from "styled-components";
import { Search } from "styled-icons/octicons/Search";

const InputField = styled.input`
    position: relative;
    padding: 15px 40px 15px 20px;
    width: 20px;
    color: #525252;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 100;
    letter-spacing: 2px;
    border: 1px solid #1de8b5;
    border-radius: 5px;
    transition: width 0.4s ease;
    outline: none;

    &:focus {
        width: 200px;
    }
`;

const InputWrapper = styled.form`
    position: relative;
    margin-top: 75px;
    height: 84px;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
`;

const SearchIcon = styled(Search)`
    position: relative;
    color: black;
    left: -35px;
    color: #1de8b5;
    height: 25px;
    cursor: pointer;
`;

export const Input = () => {
    return (
        <InputWrapper>
            <InputField placeholder="Product Id #" />
            <SearchIcon />
        </InputWrapper>
    );
};
