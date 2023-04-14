import styled from "styled-components";

export const Form = styled.form`
    width: 600px;
    display: flex;

    &>textarea{
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 300px;
    }
`