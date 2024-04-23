import React from 'react'
import "../css/real.css"
import img1 from "../images/KUMARAN (1).png"
// import Home from "../Home"
// import About from '../About'
// import Catalouge from '../Catalouge'
// import Contact from '../Contact'
// import Services from '../Services'

// import {BrowserRouter,Routes, Route,Link} from ".../components/src/"

const Real = () => {
  function fun1()
  {
    var a = document.getElementById("lar")
    a.style.display="block"
    a.setAttribute("class","slide")
    
  }
  function fun2()
  {
    var a = document.getElementById("lar")
    // a.style.display="none"
    a.setAttribute("class","slider")
  }
  return (
   <>


{/* <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={ <About/>}/>
        <Route path="/Catalouge" element={<Catalouge/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter> */}









                                {/* Header */}
    <div className='header'>
      <li><i class="fa-solid fa-phone"></i>&nbsp; 9443116093 </li>
      <li>25+ Years of Excellence  </li>
      <li className='last-list-header'>kumaranscientificsystems@gmail.com </li>
    </div>

                                {/* Navbar */}

                                <div className='navbar'>
            <img src={img1}/>
           <span className='main-nav'>
              <span>Home</span>
              <span>About us</span>
              <span>Services</span>
              <span>Catalogue</span>
              <span>Contact Us</span>
              <a><i className="fa-solid fa-bars" onClick={fun1}></i></a>
           </span>
        </div>
   

                      {/* side-nav */}

    <div className='slide' id='lar'>
        <img src={img1}/>
        <span><i class="fa-solid fa-x" onClick={fun2}></i></span>
       <span className='side-nav'>
        <center>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Catalogue</li>
          <li>Contact Us</li>
        </center>  
       </span>
    </div>

   </>
  )
}

export default Real