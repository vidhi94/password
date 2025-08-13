import React, { useState } from 'react'
import "../App.css"

const Pass = () => {

   const [PassswordLen, setPasswordLen] = useState(10)
   const [UpperCase, setUpperCase] = useState(false)
   const [LowerCase, setLowerCase] = useState(false)
   const [Number, setNumber] = useState(false)
   const [Symbols, setSymbols] = useState(false)
   const [Pass, setPass] = useState("")

   const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   const lowercase = "abcdefghijklmnopqrstuvwxyz"
   const number = "0123456789"
   const Symbol = "!@#$%^&*()_+-=[]{}|;:,.<>?"

   const passwordgenerator = () =>{
    let finalPassword = ""
    let chars = ""
     if (UpperCase || LowerCase || Number || Symbols) {
       if (UpperCase) {chars += uppercase}
       if (LowerCase) {chars += lowercase}
       if (Number) {chars += number}
       if (Symbols) {chars += Symbol}

      for(let i=0; i<PassswordLen; i++){
        finalPassword += chars.charAt(Math.floor(Math.random()*chars.length))
      }
      setPass(finalPassword);
     }
     else{
       alert("Please Select.......")
     }
   }

   const copytext = () =>{
      navigator.clipboard.writeText(Pass)
      alert("Text copy")
   }

  return (
    <>
   
     <div className="w-screen overflow-x-auto flex justify-center">
     <div style={{ width: 350, background: "#022b5f" }}>
         <div className='p-4'>
            <p className='text-center text-2xl text-white font-bold'>Passsword Generator</p>

            <div className='flex mt-5 gap-2'>
              <input type="text" value={Pass} placeholder='Password' readOnly className='basis-80 px-3 text-black'/>
              <button className='py-1 basis-20  text-white'  style={{background:"#033581"}} onClick={copytext}>copy</button>
            </div>

            <div className='flex justify-between items-center pt-4'>
              <label >Password</label>
              <input type="number" value={PassswordLen} onChange={(e)=>{setPasswordLen(e.target.value)}} min={10} max={20} className="w-14 p-1 text-black"/>
            </div>

            <div className='flex justify-between items-center pt-3'>
              <label >UpperCase</label>
              <input type="checkbox" checked={UpperCase} onChange={()=>{setUpperCase(!UpperCase)}}/>
            </div>

             <div className='flex justify-between items-center pt-3'>
              <label >LowerCase</label>
              <input type="checkbox" checked={LowerCase} onChange={()=>{setLowerCase(!LowerCase)}}/>
            </div>

             <div className='flex justify-between items-center pt-3'>
              <label >Number</label>
              <input type="checkbox" checked={Number} onChange={()=>{setNumber(!Number)}}/>
            </div>

             <div className='flex justify-between items-center pt-3'>
              <label >Symbol</label>
              <input type="checkbox" checked={Symbols} onChange={()=>{setSymbols(!Symbols)}}/>
            </div>

            <button className=' w-full mt-3 py-2' style={{background:"#033581"}} onClick={passwordgenerator}>Generator Password</button>
         </div>
       
     </div>
   </div>

     
    </>
  )
}

export default Pass