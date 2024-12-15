import search from './images/search.png'

function Search(){
    return(
          <div style={{backgroundColor:'white',display:'flex',justifyContent:'space-between',height:'50px',borderRadius:'5px',alignItems:'center'}}>
              <input className='search' style={{flexGrow:1,marginLeft:'10px',fontSize:'20px',border:'none',focus:'none'}}></input>
              <img src={search} alt="" style={{maxWidth:'20px',maxHeight:'20px',marginRight:'10px'}} />
          </div>
    )
}

export {Search}