import React, { useState } from "react";
import "../../styles/cipher-styles/vigenere-cipher.css";
import { Input, Switch, Button } from "antd";
const { TextArea } = Input;

const APIURL = "http://127.0.0.1:9999/api/vigenere";
const KEYGENAPIURL = "http://127.0.0.1:9999/api/vigenere/keygen";

export default function VigenereCipher() {
  // enc dec operations
  const [isEncrypt, setIsEncrypt] = useState(true);
  const handleSwitchChange = (checked) => {
    setIsEncrypt(checked);
  };

  // key operations
  const [vigenereKey, setVigenereKey] = useState();
  const generateKey = async () => {
    const text = document.getElementById("vigenere-text-input").value.trim();

    const data = {
      text
    };

    console.log(data);
    try {
      const response = await fetch(KEYGENAPIURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(response);
        setKeyText(result.key);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // enc dec operations
  const vigenereCipher = async () => {
    const text = document.getElementById("vigenere-text-input").value.trim();
    const key = document.getElementById("vigenere-key").value.trim();
    const type = isEncrypt;

    const data = {
        text,
        key,
        type
    }

    console.log(data)

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
        const errorMessages = errorData.detail

        console.log(errorMessages);

        alert(errorMessages);
      } else {
        console.log(data)
        const result = await response.json();
        setOutputText(result.result);
      }
    } catch (error) {
      console.log(error);
    }

  };

  // text area controlled
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [keyText, setKeyText] = useState("");
  
  return (
    <div className="vigenere-cipher">
      <div className="vigenere-cipher-left vigenere-cipher-child">
        <div className="vigenere-cipher-container">
          <TextArea
            className="input-area "
            id="vigenere-text-input"
            placeholder={
              isEncrypt ? "Plaintext to encrypt" : "Ciphertext to decrypt"
            }
            allowClear
            maxLength="200"
            autoSize
            style={{
              fontSize: "1.3rem",
            }}
            onChange={(e) => {
              setInputText(e.target.value);
              if (e.target.value === "") {
                setOutputText("");
              }
            }}
          />

          <TextArea
            className="input-area "
            id="vigenere-key"
            placeholder="Key"
            value={keyText}
            onChange={(e) => setKeyText(e.target.value)}
            allowClear
            maxLength="200"
            autoSize
            style={{
              fontSize: "1.3rem",
            }}
          />

          <div className="vigenere-cipher-option">
            <Button
              color="cyan"
              variant="solid"
              id="vigenere-keygen"
              onClick={() => {
                generateKey();
              }}
            >
              Generate Key
            </Button>

            <Switch
              type="primary"
              checkedChildren="Encrypt"
              unCheckedChildren="Decrypt"
              defaultChecked
              onChange={handleSwitchChange}
            />

            <Button 
            type="primary"
            onClick={() => {vigenereCipher()}}
            >{isEncrypt ? "Encrypt" : "Decrypt"}</Button>
          </div>

          <TextArea
            className="input-area "
            id="vigenere-text-output"
            placeholder={isEncrypt ? "Ciphertext" : "Plaintext"}
            readOnly
            maxLength="200"
            autoSize
            style={{
              fontSize: "1.3rem",
            }}
            value={outputText}
            onChange={(e) => setOutputText(e.target.value)}
          />
        </div>
      </div>

      <div className="vigenere-cipher-right vigenere-cipher-child">
        <div className="vigenere-information">
          <h1>VIGENERE CODER</h1>
          {/* <p>
            {" "}
            The Vigenère cipher is a classical{" "}
            <strong>polyalphabetic cipher</strong> that uses an{" "}
            <strong>alphabetic key</strong> to encrypt a message. It is an
            advanced version of the Caesar cipher and makes decryption more
            difficult by shifting each letter using a different alphabet.
          </p>

          <br /> */}

          <h2>How Does It Work?</h2>
          <p>
            <strong>Choose a Key:</strong> A key is chosen for the message to be
            encrypted.
          </p>

          <p>
            <strong>Adjust the Key:</strong> Given a key{" "}
            <strong>K = K₁, K₂, ..., Kₘ</strong> and a plaintext{" "}
            <strong>P = P₁, P₂, ..., Pₙ</strong> with <strong>n &gt; m</strong>,
            the key is repeated cyclically so that each <strong>Pᵢ</strong> has
            a corresponding <strong>Kᵢ</strong>. If <strong>n &lt; m</strong>:
            The key is truncated to match the length of the plaintext. Only the
            first <strong>n</strong> characters of the key are used.
          </p>

          <p>
            <strong>Encryption:</strong> Each letter of the message is shifted
            by the corresponding letter of the key in the alphabet: Cᵢ = (Pᵢ +
            Kᵢ) mod 26
          </p>

          <p>
            <strong>Decryption:</strong> The same key is used to shift the
            letters in the opposite direction to retrieve the original message:
            Pᵢ = (Cᵢ - Kᵢ + 26) mod 26
          </p>

          <h2>Example</h2>

          <pre>
            <strong>Plaintext:</strong> "CRYPTOGRAPHY IS FUN 1729 !" and{" "}
            <strong>Key: </strong>"KEY"
          </pre>
          <pre>
            <strong>Adjusted key:</strong> KEYKEYKEYKEY KE YKE{" "}
          </pre>
          <pre>
            <strong>Cipher text: </strong> MVWZXMQVYZLW HC JTL 1729 !
          </pre>

          <br />
          <h2>Important Warnings</h2>

          <p>
            <strong>Alphabet:</strong> The Vigenère cipher is based on the
            standard English alphabet. However, you can create your own custom
            Tabula Recta (such as Tolkien's Elvish) to suit your needs. You can
            define your own character set for encryption.
          </p>

          <p>
            <strong>Key Restrictions:</strong> The key can only consist of
            letters. Special characters, numbers, and spaces are not allowed in
            the key. However, if you wish, you can modify your own Tabula Recta
            to include these characters.
          </p>

          <p>
            <strong>Key Length and Strength:</strong> The longer and less
            repetitive the key is (up to the length of the plaintext), the
            stronger and more difficult to crack the cipher becomes (Le Chiffre
            Indéchiffrable). To achieve this, I recommend using the{" "}
            <strong>Generate Key</strong> button to create a sufficiently long
            and secure key.
          </p>
        </div>
      </div>
    </div>
  );
}
