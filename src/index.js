import React from 'react'
import ReactDOM from 'react-dom/client'
import Chat from './chat.js'
import ObjectArray from './data.js'
import {Search} from './Search.js'
import style from './css/style.css'

var root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
<div style={{backgroundColor:"#80807f",width:'100%', height:'100vh',display:'flex'}}>
  <div style={{backgroundColor:'#cccccb', margin:'auto',paddingTop:'10px',paddingBottom:'10px'}}>
  <div style={{display:'flex', flexDirection:'column',gap:'5px', maxWidth:'95%',height:'95%',margin:'auto'}}>
  <Search></Search>
  {
    ObjectArray.map((x)=>{
      console.log(x)
     return <Chat image={x}></Chat>
    })
     

  }
    
</div>
</div>
</div>


)

