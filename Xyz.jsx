import React, { useState } from "react";

const Xyz = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(false);

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numChars = "0123456789";
  const symChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const generatePassword = () => {
    let chars = "";
    if (upper) chars += upperCase;
    if (lower) chars += lowerCase;
    if (numbers) chars += numChars;
    if (symbols) chars += symChars;

    if (!chars) return alert("Select at least one type");

    let pass = Array.from({ length }, () => 
      chars[Math.floor(Math.random() * chars.length)]
    ).join("");

    setPassword(pass);
  };

  return (
    <div style={{ background: "#3B6B64", padding: 20, borderRadius: 8, color: "#fff", width: 320 }}>
      <input
        type="text"
        readOnly
        value={password}
        placeholder="Your password will appear here"
        style={{ width: "100%", fontSize: 20, padding: "8px", borderRadius: 6, background: "#234f45", color: "#fff", border: "none", marginBottom: 15 }}
      />

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <label>Password Length</label>
        <input
          type="number"
          min="1"
          max="20"
          value={length}
          onChange={(e) => setLength(Math.min(20, Math.max(1, +e.target.value)))}
          style={{ width: 50, textAlign: "center", borderRadius: 4, color: "#000" }}
        />
      </div>

      {[
        ["Contains Uppercase", upper, setUpper],
        ["Contains Lowercase", lower, setLower],
        ["Contains Numbers", numbers, setNumbers],
        ["Contains Symbols", symbols, setSymbols],
      ].map(([label, value, setValue]) => (
        <label key={label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          {label}
          <input type="checkbox" checked={value} onChange={() => setValue(!value)} />
        </label>
      ))}

      <button
        onClick={generatePassword}
        style={{ width: "100%", padding: "10px 0", background: "#324754", border: "none", borderRadius: 6, color: "#fff", fontSize: 18 }}
      >
        Generate
      </button>
    </div>
  );
};

export default Xyz;
