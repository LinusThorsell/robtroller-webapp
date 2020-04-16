import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: #121f1f;
    height: 91vh;
`;
const Code = styled.textarea`
    height: 90%;
    width: 98%;
    border: 0;
    padding: 1%;
    resize: none;
    font-size: 2em;
    background-color: #203737;
    color: aqua;
    margin: 0;
`;
const Credits = styled.p`
    height: 4%;
    box-sizing: border-box;
    border-top: 0.3vh solid aqua;
    padding: 0;
    margin: 0;

    text-align: center;
    color: aqua;
    font-size: 2vh;
`;

export default function CodeArea({trigger}) {

    const [code, changeCode] = useState()

    function handleChange(event) {
        trigger(event.target.value)
        changeCode(event.target.value)
    }

    return (
        <Container>
            <Code placeholder={"Write your code here..."} value={code} onChange={handleChange}></Code>
            <Credits>Created by Linus Thorsell @ CNG</Credits>
        </Container>
    )
}