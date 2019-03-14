import React, { Component } from "react";
import Table from "./Table";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 17px;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 50px;
`;
const Input = styled.input`
  width: 300px;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #e9e9e9;
  font-size: 9px;
  margin-bottom: 30px;
`;

class App extends Component {
  render() {
    return (
      <div className="App" style={{ width: "900px", margin: "50px auto" }}>
        <Title>Title Title Title</Title>
        <Input placeholder="text text text" />
        <Table />
      </div>
    );
  }
}

export default App;
