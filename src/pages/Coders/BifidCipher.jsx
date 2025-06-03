import React, { useEffect, useState } from "react";
import "../../styles/cipher-styles/bifid-cipher.css";
import { Input, Switch, Button } from "antd";
const { TextArea } = Input;

const APIURL = "http://127.0.0.1:9999/api/bifid";
const TABLEAPIURL = "http://127.0.0.1:9999/api/bifid/table";

export default function BifidCipher() {
  // table operations
  const classical_table = [
    ["A", "B", "C", "D", "E", "F"],
    ["G", "H", "I", "J", "K", "L"],
    ["M", "N", "O", "P", "Q", "R"],
    ["S", "T", "U", "V", "W", "X"],
    ["Y", "Z", "0", "1", "2", "3"],
    ["4", "5", "6", "7", "8", "9"],
  ];

  const [bifidTable, setBifidTable] = useState(classical_table);

  const shuffleTable = async () => {
    try {
      const response = await fetch(TABLEAPIURL);
      const data = await response.json();
      setBifidTable(data.table);
    } catch (error) {
      console.error("Tablo alınamadı:", error);
    }
  };

  // enc dec options
  const [isEncrypt, setIsEncrypt] = useState(true);

  const handleSwitchChange = (checked) => {
    setIsEncrypt(checked);
  };

  // enc dec operations
  const getArguments = async () => {
    const text = document.getElementById("bifid-text").value.trim();
    const table = bifidTable;
    const coder_type = isEncrypt ? "encryption" : "decryption";

    const data = {
      text,
      table,
      coder_type,
    };

    console.log(data);

    try {
      const response = await fetch(APIURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessages = errorData.detail?.map((e) => e.msg) || [];

        console.log(errorMessages);

        alert(errorMessages.join("\n\n"));
      } else {
        const result = await response.json();
        setOutputText(result.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // clear both input and output textarea
  const [inputText, setInputText] = useState("");

  // output text area controlled
  const [outputText, setOutputText] = useState("");

  return (
    <div className="bifid-cipher">
      <div className="bifid-cipher-left bifid-cipher-child">
        <p>Table</p>
        <div className="bifid-table">
          {bifidTable.map((row, rowIndex) => (
            <div className="bifid-row" key={rowIndex}>
              {row.map((cell, colIndex) => (
                <div className="bifid-cell" key={colIndex}>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
        <Button id="shuffle-table-btn" type="primary" onClick={shuffleTable}>
          Shuffle Table
        </Button>
      </div>

      <div className="bifid-cipher-middle bifid-cipher-child">
        <div className="bifid-cipher-container">
          <TextArea
            className="input-area ant-text-area"
            id="bifid-text"
            placeholder={
              isEncrypt ? "Plaintext to encrypt" : "Ciphertext to decrypt"
            }
            allowClear
            maxLength="200"
            autoSize
            onPressEnter={() => {
              getArguments();
            }}
            style={{
              fontSize: "1.5rem",
            }}
            onChange={(e) => {
              setInputText(e.target.value);
              if (e.target.value === "") {
                setOutputText("");
              }
            }}
          />

          <div className="bifid-cipher-option">
            <Switch
              checkedChildren="Encrypt"
              unCheckedChildren="Decrypt"
              defaultChecked
              onChange={handleSwitchChange}
            />

            <Button
              type="primary"
              onClick={() => {
                getArguments();
              }}
            >
              {isEncrypt ? "Encrypt" : "Decrypt"}
            </Button>
          </div>

          <TextArea
            className="output-area ant-text-area"
            id="bifid-result"
            placeholder={isEncrypt ? "Ciphertext" : "Plaintext"}
            autoSize
            allowClear
            value={outputText}
            onChange={(e) => setOutputText(e.target.value)}
            readOnly
            style={{
              fontSize: "1.5rem",
            }}
          />
        </div>
      </div>
      <div className="bifid-cipher-right bifid-cipher-child">
        <p
          style={{
            whiteSpace: "pre-wrap",
            fontFamily: "monospace",
          }}
        >
          {`
Plaintext: S O K R A T E S
-Let's write the row and column numbers for each letter
        S O K R A T E S
row    4 3 2 3 1 4 1 4 
column 1 3 5 6 1 2 5 1
-Then, we concatenate the row numbers followed by the column numbers into a single sequence:
4 3 2 3 1 4 1 4 1 3 5 6 1 2 5 1 
-Let's divide this sequence into digraphs (pairs of two numbers):
(4,3),(2,3),(1,4),(1,4),(1,3),(5,6),(1,2),(5,1) 
-The letter equivalents of these digraphs form our ciphertext:
U I D D C 3 B Y

Ciphertext: UIDDC3BY
-The decryption process is the exact reverse of encryption.
-First, we find the numeric equivalents (row, column pairs) of each character in the ciphertext:
(4,3),(2,3),(1,4),(1,4),(1,3),(5,6),(1,2),(5,1) 
-Then, we flatten the digraphs into a single sequence and split it into two parts:
  4 3 2 3 1 4 1 4 1 3 5 6 1 2 5 1 
4 3 2 3 1 4 1 4 - 1 3 5 6 1 2 5 1 
-The first part represents the rows, and the second part represents the columns:
4 3 2 3 1 4 1 4 
1 3 5 6 1 2 5 1 
-We obtain the exact same representation as we had during encryption, which allows us to successfully decrypt:
row    4 3 2 3 1 4 1 4 
column 1 3 5 6 1 2 5 1
       S O K R A T E S    

  `}
        </p>
      </div>
    </div>
  );
}
