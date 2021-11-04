 import React from 'react'
 import '../styles/prenavbar.css'
  
 const PreNavbar = () => {
     return (
         <div className='preNav'>
             <div>
                 <a href="https://www.mi.com/bd/">XIAOMI BANGLADESH</a>  
                 <a href="https://c.mi.com/bd/">MI COMMUNITY</a>
             </div>

             <div>
                 <a href="https://www.mi.com/bd/">Sign In</a>
                 <a href="https://c.mi.com/bd/">Sign Up</a>
                 <a href="https://c.mi.com/bd/"> <span> <i class="fas fa-shopping-cart"></i> </span> cart(0)</a>
             </div>
             
         </div>
     )
 }
 
 export default PreNavbar
 