import { ChangeEvent, FormEvent, FormEventHandler, Fragment, useEffect, useRef, useState } from "react"
import { Form } from "./styles";

import filter1 from "../../data/palavroes.txt"
import filter2 from "../../data/conteudoSexual.txt"
import filter3 from "../../data/caracteresInadequados.txt"
import ResultMessage from "../../components/ResultMessage";

export default function FormaPage(){

    const [textInput, setTextInput] = useState<string>();
    const [badWords, setBadWords] = useState<string[]>([]);
    const [sexualContent, setSexualContent] = useState<string[]>([]);
    const [inappropriateChars, setInappropriateChars] = useState<string[]>([]);
    const [msgResult, setMsgResult] = useState<string>("");
    const [okResult, setOkResult] = useState<boolean>(true);
    
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTextInput(e.target.value);
    }

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();
        let badWordsDetected: boolean = false
        let sexualContentDetected: boolean = false
        let charDetected: boolean = false
        let resultStr: string = ""

        await badWords.map((word, index) => {
            if(textInput?.includes(word.replace("*", ""))){
                badWordsDetected = true
                resultStr = resultStr + ",Bad Word Detected: " + word
            }
        })

        await sexualContent.map((word, index) => {
            if(textInput?.includes(word.replace("*", ""))){
                sexualContentDetected = true
                resultStr = resultStr + ",Sexual Content Detected: " + word
            }
        })

        await inappropriateChars.map((c, index) => {
            if(textInput?.includes(c)){
                charDetected = true
                resultStr = resultStr + ",Inappropriate Chars" + c
            }
        })

        if(badWordsDetected || sexualContentDetected || charDetected){
            setMsgResult(resultStr)
            setOkResult(false)
        }
        else {
            setMsgResult("Seu texto está ok!!!")
            setOkResult(true)
        }
    }

    useEffect(() => {
        fetch(filter1)
            .then(content => content.text())
            .then(text => {
                setBadWords(text.split(", "));
            });

        fetch(filter2)
            .then(content => content.text())
            .then(text => {
                setSexualContent(text.split(", "));
            });

        fetch(filter3)
            .then(content => content.text())
            .then(text => {
                setInappropriateChars(text.split(", "));
            });

    }, [])

    return(
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <textarea name="textInput" placeholder="Insira texto para análise" value={textInput} onChange={handleChange}/>
                <button type="submit">Submit</button>
            </Form>
            <ResultMessage checked={okResult} danger={!okResult}>{msgResult}</ResultMessage>
        </Fragment>
    )
}