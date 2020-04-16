import React from 'react';
import styled from 'styled-components'
import Controller from './Controller'
import CodeArea from './CodeArea'
import {SendData} from './Client'

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: darkslategray;
  padding: 0;
  margin: 0;
`;

var isConnected = false;
var ADDRESS = "NOT_SET";
var CODE = "NONE";

function App() {

  function RelayData() {
    if (ADDRESS === "NOT_SET") {
      alert("Not connected to robtroller")
    }
    else if (CODE === "NONE") {
      alert("No code to send")
    }
    else {
      SendData(ADDRESS, CODE)
    }
  }

  function SaveAddress(receivedAddress) {
    ADDRESS = receivedAddress;
    isConnected = true;
  }
  function SaveCode(receivedCode) {
    CODE = receivedCode;
  }

  return (
    <Page>
      <Controller connect={SaveAddress} trigger={RelayData} connected={isConnected} />
      <CodeArea trigger={SaveCode} />
    </Page>
  );
}

export default App;
