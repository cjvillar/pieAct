import React from 'react';
import rp from './rasberrypi.svg'; 


function Header() {
  return (
    <div>
      <div class="header">
        {/* <div class="glitch" data-text="ラズベリーパイ"></div>
        <div class="glitch" data-text="RASPBERRYPIE"></div> */}
        <h1>RASPBERRY PIE PRICE DATA FROM AMAZON
        <sub class="sub">by:ChrisCodes</sub>
        </h1> 
       


      </div>  
      <img src={rp} alt="pi logo" class="pieimage"></img>
      {/* <img src={vapor_comp} alt="vaporwave" class="center"></img> */}
     
    </div>
  );
}

export default Header;
