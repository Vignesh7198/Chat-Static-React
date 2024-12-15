import star from './images/Star.png'

function Chat(Object){
console.log(Object.image.image)
   return(
        <div style={{display:'flex',backgroundColor:'white', borderRadius:'5px', border:'2px solid black'}}>
            <img src={Object.image.image} alt="" style={{borderRadius:'50%',marginLeft:"3%",height:'80px',width:'80px'}}/>
            <div style={{alignContent:"center", display:'flex', flexDirection:'column', justifyContent:'center'}}>
               <h4 style={{marginLeft:'10px'}}>{Object.image.name}</h4>
               <p style={{marginLeft:'10px'}}>{Object.image.message}</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center', position:'relative', left:'0px',justifyContent:'space-between',marginLeft:'auto', padding:'5px'}}>
               <p>{Object.image.time}</p>
               <img src={star} style={{width:'20px',height:'20px'}}/>
            </div>
        </div>
   )

}

export default Chat