import styled from "styled-components";

interface MessageProps {
    checked?: boolean;
    danger?: boolean
}

export const MessageDiv = styled.div<MessageProps>`
    width: 600px;
    margin: 10px 0;
    border-radius: 4px;
    overflow-x: auto;

    background-color: ${props => props.checked
        ? "rgba(0, 170, 0, 0.2)" : props.danger
        ? "rgba(170, 0, 0, 0.2)" : "transparent"};
    border: 1px solid ${props => props.checked
        ? "rgba(0, 170, 0, 1)" : props.danger
        ? "rgba(170, 0, 0, 1)" : "transparent"};
    color: #fff;
`;