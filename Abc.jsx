// import React, { useState } from "react";

// const Abc = () => {

//   const [text, setText] = useState("")
 
//    const UpperCase = () =>{
//       setText(text.toUpperCase())
//    }

//    const LowerCase = () =>{
//       setText(text.toLowerCase()) 
//    }

//    const LengthCase = () =>{
//       setText(text.length.toString())
//    }

//   return (
//     <>
//       <div className="bg-violet-100 flex flex-col justify-center items-center h-screen  ">
//         <div className="border border-pink-500 py-8 px-8 flex flex-col gap-3 items-center ">

//           <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
//             <input type="text"
//              placeholder="enter your passsword"
//              value={text}
//              onChange={(e)=> setText(e.target.value)}
//              className="px-3 py-1 rounded-lg border border-gray-300 focus:outline-none  focus:ring-offset-2 focus:ring-1 focus:ring-violet-500 " />
//           <button type="submit" className="bg-white text-violet-700 px-4 py-1.5 rounded-md" >Submit</button>
         
//         </div>
          
//         <div className="flex flex-col flex-wrap justify-center gap-2 mt-3"> 
//           <button className="bg-violet-500 text-white px-20 py-2 rounded-md hover:bg-violet-600" onClick={UpperCase}>UpperCase</button>
//           <button className="bg-violet-500 text-white px-20 py-2 rounded-md hover:bg-violet-600" onClick={LowerCase}>LowerCase</button>
//           <button className="bg-violet-500 text-white px-20 py-2 rounded-md hover:bg-violet-600" onClick={LengthCase}>length</button>

//         </div>


//         </div>

//       </div>

    

//     </>
//   );
// };

// export default Abc;




import React, { useState } from "react";

const Abc = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState("10");
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  const getValidLength = () => {
    const num = Number(length);
    if (isNaN(num) || num < 1) return 1;
    if (num > 20) return 20;
    return num;
  };

  const generatePassword = () => {
    const len = getValidLength();

    let charPool = "";
    if (includeUpper) charPool += upperCaseChars;
    if (includeLower) charPool += lowerCaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    if (charPool.length === 0) {
      alert("Please select at least one character type!");
      return;
    }

    let generated = "";
    for (let i = 0; i < len; i++) {
      const idx = Math.floor(Math.random() * charPool.length);
      generated += charPool[idx];
    }

    setPassword(generated);
  };

  return (
    <div style={{backgroundColor: "#3B6B64", width: 320, padding: 20, borderRadius: 8, color: "#fff", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} >
      <input type="text" readOnly value={password} placeholder="Your password will appear here" style={{width: "100%", fontSize: 24,
          padding: "8px 12px", borderRadius: 6, border: "none", marginBottom: 15, boxSizing: "border-box", userSelect: "all", backgroundColor: "#234f45", color: "#fff"}} />

      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
        <label style={{ flex: 1 }}>Password Length</label>
        <input type="number" min="1"
          max="20" value={length} onChange={(e) => setLength(e.target.value)}
          onBlur={() => {
            let num = Number(length);
            if (isNaN(num) || num < 1) setLength("1");
            else if (num > 20) setLength("20");
            else setLength(String(num));
          }}
          style={{
            width: 50,
            padding: "4px",
            borderRadius: 4,
            border: "none",
            textAlign: "center",
            fontSize: 16,
            color: "#000"
          }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
          Contains Uppercase
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />
        </label>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
          Contains Lowercase
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
          />
        </label>
      </div>

      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
          Contains Numbers
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
        </label>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
          Contains Symbols
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
        </label>
      </div>

      <button
        onClick={() => {
          console.log("Generate clicked");
          generatePassword();
        }}
        style={{
          width: "100%",
          padding: "10px 0",
          backgroundColor: "#324754",
          border: "none",
          borderRadius: 6,
          color: "#fff",
          fontSize: 18,
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Generate
      </button>
    </div>
  );
};

export default Abc;
