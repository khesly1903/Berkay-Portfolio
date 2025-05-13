import React from 'react'
import "../../styles/coder-styles/vigenere-coder.css"

const url = "http://127.0.0.1:9999/vigenere"
const url2 = "http://127.0.0.1:9999/vigenere/keygen"

async function getArguments(type) {
  const text = document.getElementById("coder-text").innerText.trim();
  const key = document.getElementById("coder-key").innerText.trim();

  const data = {
    text,
    key,
    type
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessages = errorData.detail?.map(e => e.msg) || [];

      console.log(errorMessages)

      alert(errorMessages.join("\n\n"))

    } else {
      const result = await response.json()
      document.getElementById("coder-output").innerText = result.result;
    }

  } catch (error) {
    console.error("Hata:", error);
  }
}


async function getKeyGenArguments() {
  const text = document.getElementById("coder-text").innerText.trim();

  const data = {
    text
  }
  try {
    const response = await fetch(url2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMessages = errorData.detail?.map(e => e.msg) || [];

      console.log(errorMessages)

      alert(errorMessages.join("\n\n"))

    } else {
      const result = await response.json()
      document.getElementById("coder-key").innerText = result["generated-key"];
    }

  } catch (error) {
    console.error("Hata:", error);
  }

}



export default function VigenereCoder() {
  return (
    <>
      <div className="vigenere">


        <div className="vigenere-container">

          <div className="vigenere-coder">

            <div id="coder-text" className="input-text-area" contentEditable
              role="textbox" data-placeholder="Plaintext or Ciphertext" ></div>

            <div id="coder-key" className="input-text-area" contentEditable
              role="textbox" data-placeholder="Key" ></div>

            <button className="coder-button" id="coder-keygen-button" onClick={() => getKeyGenArguments()}>Generate Key</button>
            
            <div className="coder-button-container">
              <button className="coder-button" id="coder-encoder-button" onClick={() => getArguments(false)}>Encode</button>
              <button className="coder-button" id="coder-decoder-button" onClick={() => getArguments(true)}>Decode</button>
            </div>

            <div id="coder-output" className="input-text-area" role="textbox"
              data-placeholder="Ciphertext or Plaintext"> </div>


          </div>
        </div>

        <div className="coder-information">

          <h1>VIGENERE CODER</h1>
          <p>    The Vigenère cipher is a classical <strong>polyalphabetic cipher</strong> that uses an <strong>alphabetic key</strong> to encrypt a message. It is an advanced version of the Caesar cipher and makes decryption more difficult by shifting each letter using a different alphabet.
          </p>

          <br />


          <h2>How Does It Work?</h2>
          <p><strong>Choose a Key:</strong> A key is chosen for the message to be encrypted.
          </p>

          <p><strong>Adjust the Key:</strong> Given a key <strong>K = K₁, K₂, ..., Kₘ</strong> and a plaintext <strong>P = P₁, P₂, ..., Pₙ</strong> with <strong>n &gt; m</strong>, the key is repeated cyclically so that each <strong>Pᵢ</strong> has a corresponding <strong>Kᵢ</strong>. If <strong>n &lt; m</strong>: The key is truncated to match the length of the plaintext. Only the first <strong>n</strong> characters of the key are used.</p>

          <p><strong>Encryption:</strong> Each letter of the message is shifted by the corresponding letter of the key in the alphabet.</p>
          <p>Cᵢ = (Pᵢ + Kᵢ) mod 26</p>


          <p><strong>Decryption:</strong> The same key is used to shift the letters in the opposite direction to retrieve the original message.
          </p>
          <p>Pᵢ = (Cᵢ - Kᵢ + 26) mod 26</p>


          <h2>Example</h2>

          <pre><strong>Key: </strong>KEY</pre>
          <pre><strong>Plaintext:</strong>     CRYPTOGRAPHY IS FUN 1729 !</pre>
          <pre><strong>Adjusted key:</strong>  KEYKEYKEYKEY KE YKE </pre>
          <pre><strong>Cipher text: </strong>  MVWZXMQVYZLW HC JTL 1729 !</pre>

          <br />
          <h2>Important Warnings</h2>

          <p><strong>Alphabet:</strong> The Vigenère cipher is based on the standard English alphabet. However, you can create your own custom Tabula Recta (such as Tolkien's Elvish) to suit your needs. You can define your own character set for encryption.</p>

          <p><strong>Key Restrictions:</strong> The key can only consist of letters. Special characters, numbers, and spaces are not allowed in the key. However, if you wish, you can modify your own Tabula Recta to include these characters.</p>

          <p><strong>Key Length and Strength:</strong> The longer and less repetitive the key is (up to the length of the plaintext), the stronger and more difficult to crack the cipher becomes (Le Chiffre Indéchiffrable). To achieve this, I recommend using the <strong>Generate Key</strong> button to create a sufficiently long and secure key.</p>

        </div>



      </div>

    </>

  )
}
