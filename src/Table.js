import React from "react";
import styled from "styled-components";

const TableBody = styled.table`
  width: 100%;
  border-spacing: 0 13px;
  position: relative;
`;

const Row = styled.tr`
  padding-left: 10px;
  height: 60px;
  margin-bottom: 13px;
  background: white;
  border: 1px solid #e9e9e9;
  margin-bottom: 10px;
`;
const Td = styled.td`
  font-weight: bold;
  font-size: 10px;
  text-align: left;
  margin-bottom: 10px;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  &:first-child {
    padding-left: 20px;
  }
  &:last-child {
    padding-right: 40px;
  }
`;
const Th = styled.th`
  text-align: left;
  font-weight: 300;
  font-size: 10px;
  border-bottom: 1px solid #e9e9e9;
  border-top: 1px solid #e9e9e9;
  &:first-child {
    padding-left: 20px;
    border-left: 1px solid #e9e9e9;
  }
  &:last-child {
    border-right: 1px solid #e9e9e9;
  }
`;
const SelectBlock = styled.div`
  position: absolute;
  top: 14px;
  right: 0;
  display: flex;
  font-size: 10px;
`;
const Select = styled.select`
  font-size: 10px;
  border: 1px solid #e9e9e9;
  outline: none;
`;
const tHeadElemednts = [
  "Name",
  "Author",
  "Live",
  "Type",
  "Live Market",
  "Trades",
  "Max Drowndown",
  "Performance",
  "Rating"
];

const Table = () => {
  return (
    <TableBody>
      <thead>
        <tr>
          {tHeadElemednts.map(m => (
            <Td>{m}</Td>
          ))}
        </tr>
      </thead>
      <tbody>
        <Row>
          <Th>Lucky</Th>
          <Th>Auth.network</Th>
          <Th>3M</Th>
          <Th>SMS</Th>
          <Th>Poloniex</Th>
          <Th>23</Th>
          <Th>4.39%</Th>
          <Th style={{ lineHeight: "25px" }}>
            <span>
              73.34%
              <img
                style={{ position: "absolute" }}
                src="https://picsum.photos/70/25/?random"
                alt=""
              />
            </span>
          </Th>
          <Th style={{ lineHeight: "15px" }}>
            <p style={{ width: "45px" }}>
              4.9
              <img
                src="https://picsum.photos/70/15/?random"
                style={{ position: "absolute" }}
                alt=""
              />
            </p>
          </Th>
        </Row>

        <Row>
          <Th>Lucky</Th>
          <Th>Auth.network</Th>
          <Th>3M</Th>
          <Th>SMS</Th>
          <Th>Poloniex</Th>
          <Th>23</Th>
          <Th>4.39%</Th>
          <Th style={{ lineHeight: "25px" }}>
            <span>
              73.34%
              <img
                style={{ position: "absolute" }}
                src="https://picsum.photos/70/25/?random"
                alt=""
              />
            </span>
          </Th>
          <Th style={{ lineHeight: "15px" }}>
            <p style={{ width: "45px" }}>
              4.9
              <img
                src="https://picsum.photos/70/15/?random"
                style={{ position: "absolute" }}
                alt=""
              />
            </p>
          </Th>
        </Row>

        <Row>
          <Th>Lucky</Th>
          <Th>Auth.network</Th>
          <Th>3M</Th>
          <Th>SMS</Th>
          <Th>Poloniex</Th>
          <Th>23</Th>
          <Th>4.39%</Th>
          <Th style={{ lineHeight: "25px" }}>
            <span>
              73.34%
              <img
                style={{ position: "absolute" }}
                src="https://picsum.photos/70/25/?random"
                alt=""
              />
            </span>
          </Th>
          <Th style={{ lineHeight: "15px" }}>
            <p style={{ width: "45px" }}>
              4.9
              <img
                src="https://picsum.photos/70/15/?random"
                style={{ position: "absolute" }}
                alt=""
              />
            </p>
          </Th>
        </Row>
      </tbody>
      <SelectBlock>
        <span style={{ marginRight: "5px" }}>Time</span>
        <form>
          <Select>
            <option>All</option>
            <option>All</option>
            <option>All</option>
          </Select>
        </form>
      </SelectBlock>
    </TableBody>
  );
};

export default Table;
