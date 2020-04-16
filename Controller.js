import React, {useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 9vh;
    border-bottom: 0.5vh solid aqua;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
`;
const Title = styled.h1`
    margin: 0;
    padding-left: 1vw;
    font-size: 6vh;
    color: aqua;
`;
const Run = styled.h1`
    margin: 0;
    padding: 0.5vh;

    font-size: 4vh;
    color: aqua;

    border: 0.5vh solid aqua;
    border-radius: 1vh;

    :hover {
        cursor: pointer;
        color: white;
        border-color: white;
    }
`;
const SelectionContainer = styled.div`
    width: 20%;
    height: 100%;
    border-left: 0.5vh solid aqua;
`;
const InputField = styled.input`
    width: 100%;
    height: 32%;
    border: 0;
    width: 90%;
    padding-left: 5%;
    padding-right: 5%;
`;
const Connect = styled.p`
    background-color: ${props => props.connected ? 'green' : 'darkred'};
    width: 100%;
    height: 28%;
    padding: 0;
    padding-top: 2%;
    margin: 0;

    text-align: center;
    color: ${props => props.connected ? 'limegreen' : 'pink'};
    font-size: 1.5vh;

    :hover {
        cursor: pointer;
    }
`;

export default function Controller({trigger, connect}) {

    const [connected, setConnected] = useState(false)
    const [addressandport, setAddress] = useState()

    let toDraw = "Error"

    if (connected) {
        toDraw = "Connected"
    }
    else {
        toDraw = "Connect"
    }

    function onConnect() {
        setConnected(true)
        connect(addressandport)
    }
    function triggerUpdate(event) {
        setAddress(event.target.value)
    }

    return (
        <Container>
            <Title>Robtroller</Title>
            <Run onClick={trigger}>Run Code</Run>
            <SelectionContainer>
                <InputField value={addressandport} onChange={triggerUpdate} placeholder={"IP Address : Port"}></InputField>
                <InputField type={"password"} placeholder={"Password"}></InputField>
                <Connect connected={connected} onClick={onConnect}>{toDraw}</Connect>
            </SelectionContainer>
        </Container>
    )
}
