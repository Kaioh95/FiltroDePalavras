import { ReactNode } from "react"
import { MessageDiv } from "./style"

interface ResultMessageProps{
    checked? : boolean
    danger? : boolean
    children?: ReactNode
}

export default function ResultMessage(props: ResultMessageProps){

    return(
        <MessageDiv checked={props.checked} danger={props.danger}>
            {props.children}
        </MessageDiv>
    )
}